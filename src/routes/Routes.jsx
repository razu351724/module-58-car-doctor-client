import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Main";
import Home from "../payes/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../payes/Login/Login";
import SignUp from "../payes/SignUp/SignUp";
import BookService from "../payes/BookService/BookService";
import Bookings from "../payes/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


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
          path: "/BookService/:id",
          element: <BookService></BookService>,
          loader: ({params}) => fetch(`http://localhost:5100/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoute> <Bookings></Bookings> </PrivateRoute>,
          
        }    

    ],
  },
]);

  export default router;