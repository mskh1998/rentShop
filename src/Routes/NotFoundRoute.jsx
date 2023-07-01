import NotFoundLayout from "../layout/NotFoundLayout";
import NotFound from "../views/NotFound";

const NotFoundPage = {
  path: "*",
  element: <NotFoundLayout />,
  children: [{ path: "*", element: <NotFound /> }],
};

export default NotFoundPage;
