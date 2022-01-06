import React, { FormEvent, useCallback, useState } from "react";
import { Container } from "./style";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/loader";

interface IData {
  name: String;
  email: String;
  password: String;
}

const SignUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const history = useNavigate();
  const [load, setLoad] = useState(false);
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api
        .post("users", data)
        .then((response) => {
          console.log(response.data);
          toast.success(
            "Cadastro realizado com sucesso! Você será redirecionado para a página de login!",
            {
              hideProgressBar: false,
              onClose: () => history("/signin"),
            }
          );
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
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu nome"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
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
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/signin">Clique aqui para Logar</Link>
      </div>
    </Container>
  );
};

export default SignUp;
