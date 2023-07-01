import LoginSignUpLayout from "../layout/LoginSignUpLayout";
import LoginPage from "../views/login&SignUp/LoginPage";
import SignUpPage from "../views/login&SignUp/SignUpPage";

const NotFoundPage = {
  path: "",
  element: <LoginSignUpLayout />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "signUp", element: <SignUpPage /> },
  ],
};

export default NotFoundPage;
