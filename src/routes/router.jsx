import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home/Home";
import Details from "../Pages/Details/Details";
import DetailsLayout from "../Layout/DetailsLayout";
import AddProject from "../Components/AddProject/AddProject";
// import AllProject from "../Pages/AllProject/AllProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProject",
        element: <AddProject/>,
      },
  
      // {
      //   path: "/allProject",
      //   element: <AllProject></AllProject>,
        
      // },
    ],
  },
  {
    path: "detailsLayout",
    element: <DetailsLayout></DetailsLayout>,
    children: [
      {
        path: "/detailsLayout/details/:id",
        element: <Details></Details>,
        
      },
    ],
  },
]);

export default router;
