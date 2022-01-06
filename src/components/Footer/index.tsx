import React from "react";
import { FooterStyle } from "./styles";
import { useSelector } from "react-redux";
import { IGlobalState } from "../../store/modules/user/type";

const Footer: React.FC = () => {
  const state = useSelector((state: IGlobalState) => state.users);
  return (
    <FooterStyle>
      <p>Gama Academy</p>
      <br />
      <p>Temos {state.length} usuários cadastrados.</p>
    </FooterStyle>
  );
};

export default Footer;
