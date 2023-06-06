import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import StoreItems from "../views/StoreItems";

const HomeR = {
  path: "",
  element: <MainLayout />,
  children: [
    { path: "", element: <Home /> },
    { path: "storeItems", element: <StoreItems /> },
    { path: "aboutUs", element: <StoreItems /> },
  ],
};

export default HomeR;
