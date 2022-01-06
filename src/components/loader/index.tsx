import React from "react";
import Lottie from "react-lottie";
import { Container } from "./style";
import * as animation from "../../animations/66433-loader.json";

export const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <Container>
      <div>
        <Lottie options={defaultOptions} width={200} height={200} />
      </div>
    </Container>
  );
};

export default Loader;
