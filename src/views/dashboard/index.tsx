import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/modules/user/reducer";
import { api } from "../../services/api";
import Loader from "../../components/loader";
import { Container } from "./styles";

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  photo: {
    path: string;
  };
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<ICollaborator[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const token = localStorage.getItem("@gamaServiceToken")?.replace(/["]/g, "");

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("collaborator", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setIsLoad(true);
        setData(response.data);
      })
      .finally(() => setIsLoad(false));
  }, [token]);

  useEffect(() => {
    data?.map((user) => dispatch(addNewUser(user)));
  }, [data, dispatch]);

  if (isLoad) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="wrapper">
        <h1>Dashboard</h1>
        <div>
          {data?.map((el) => (
            <div key={el.id} className="card">
              <img
                src="https://p7z2w8n8.rocketcdn.me/wp-content/uploads/2020/09/jeff-bezos-a-historia-do-homem-mais-rico-do-mundo-1-1024x683.jpg.webp"
                alt="img"
                width="100px"
                height="100px"
              />
              <div className="content-information">
                <p>{el.name}</p>
                <p>{el.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Retornar para Home</Link>
      </div>
    </Container>
  );
};

export default Dashboard;
