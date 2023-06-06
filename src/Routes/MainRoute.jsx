import MainLayout from "../layout/MainLayout";
import AboutUs from "../views/AboutUs";
import Home from "../views/Home";
import StoreItems from "../views/StoreItems";

const HomeR = {
  path: "",
  element: <MainLayout />,
  children: [
    { path: "", element: <Home /> },
    { path: "storeItems", element: <StoreItems /> },
    { path: "aboutUs", element: <AboutUs /> },
  ],
};

export default HomeR;
