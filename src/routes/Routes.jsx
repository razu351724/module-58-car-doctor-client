import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Main";
import Home from "../payes/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../payes/Login/Login";
import SignUp from "../payes/SignUp/SignUp";
import Checkout from "../payes/Checkout/Checkout";


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
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5100/services/${params.id}`)
        }    

    ],
  },
]);

  export default router;