import { useRoutes } from "react-router-dom";
import MainRoute from "./MainRoute";
import NotFoundRoute from "./NotFoundRoute";

function MainRoutes() {
  return useRoutes([MainRoute, NotFoundRoute]);
}

export default MainRoutes;
