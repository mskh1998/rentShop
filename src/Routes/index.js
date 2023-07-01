import { useRoutes } from "react-router-dom";
import MainRoute from "./MainRoute";
import LoginSingUp from "./LoginSingUp";
import NotFoundRoute from "./NotFoundRoute";

function MainRoutes() {
  return useRoutes([MainRoute, LoginSingUp, NotFoundRoute]);
}

export default MainRoutes;
