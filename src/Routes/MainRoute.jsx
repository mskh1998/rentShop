import MainLayout from "../layout/MainLayout";
import LandingPage from "../views/LandingPage";
import MainHome from "../views/home/MainHome";

const HomeR = {
  path: "",
  element: <MainLayout />,
  children: [
    { path: "", element: <LandingPage /> },
    { path: "home", element: <MainHome /> },
  ],
};

export default HomeR;
