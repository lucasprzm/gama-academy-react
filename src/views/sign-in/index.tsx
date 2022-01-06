import React, { FormEvent, useCallback, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../../components/loader";

interface IData {
  email: String;
  password: String;
}

const SignIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);
  const history = useNavigate();
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      api
        .post("session", data)
        .then((response) => {
          const sessionToken = JSON.stringify(response.data.token);
          localStorage.setItem("@gamaServiceToken", sessionToken);
          setLoad(false);
          console.log(response.data);
          toast.success("Login realizado com sucesso!", {
            hideProgressBar: false,
            onClose: () => history("dashboard"),
          });
        })
        .catch(() => {
          toast.error("Ooops, algo deu errado.");
        })
        .finally(() => setLoad(false));
    },
    [data, history]
  );

  if (load) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="card">
        <h5>Logar no Sistema</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu e-mail"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Informe sua senha"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Clique aqui para Cadastrar</Link>
      </div>
    </Container>
  );
};

export default SignIn;
