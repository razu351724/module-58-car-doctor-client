import { Outlet } from "react-router-dom";
import Home from "../payes/Home/Home/Home";
import Footer from "../payes/Shared/Footer/Footer";
import Navbar from "../payes/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;