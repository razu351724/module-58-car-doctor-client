import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Main";
import Home from "../payes/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../payes/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        }     

    ],
  },
]);

  export default router;