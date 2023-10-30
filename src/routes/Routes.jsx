import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Main";
import Home from "../payes/Home/Home/Home";
import Main from "../Layout/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
children: [
     

    ],
  },
]);

  export default router;