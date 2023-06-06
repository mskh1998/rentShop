import NotFoundLayout from "../layout/NotFoundLayout";
import NotFound from "../views/NotFound";

const Login = {
  path: "*",
  element: <NotFoundLayout />,
  children: [{ path: "*", element: <NotFound /> }],
};

export default Login;
