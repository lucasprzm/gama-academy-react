import { Route, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoutes: any = ({ element: Element, path: Path, ...rest }: any) => {
  const isLoggedIn: string | null = localStorage.getItem("@gamaServiceToken");

  const isSectionActive: any = () => {
    if (isLoggedIn === null) {
      return false;
    } else {
      const onlyToken = isLoggedIn;
      const tokenPayLoad: any = jwt_decode(onlyToken);
      const expSeconds = tokenPayLoad.exp;
      const timeNow = Date.now() / 1000;
      return timeNow > expSeconds ? false : true;
    }
  };

  return (
    <Route
      {...rest}
      render={(routeProps: any) =>
        isSectionActive() ? <Element {...routeProps} /> : <Navigate to="/" />
      }
    />
  );
};

export default PrivateRoutes;
