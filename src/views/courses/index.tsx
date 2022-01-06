import React from "react";
import { Container } from "./style";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Courses: React.FC = () => {
  return (
    <>
      <Nav />
      <Container>
        <h1>Cursos</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Courses;
