import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";


const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "",
      element: <HomePage />
    },

    // {
    //   path: "",
    //   element: <SideBar />,
    //   children: [
    //     { path: "/", element: <HomePage /> },
    //   ],
    // },
  ]);

  return element;
};

export default AppRoutes;
