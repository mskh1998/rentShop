import MainLayout from "../layout/MainLayout";
import LandingPage from "../views/LandingPage";
import MainHome from "../views/home/MainHome";
import ItemsInfo from "../views/itemsInfo/itemsInfo";

const HomeR = {
  path: "",
  element: <MainLayout />,
  children: [
    { path: "", element: <LandingPage /> },
    {
      path: "home",
      element: <MainHome />,
    },
    { path: "id", element: <ItemsInfo /> },
  ],
};

export default HomeR;
