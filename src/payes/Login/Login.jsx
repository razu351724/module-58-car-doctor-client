import { Link,  useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event => {
        // event.preventDefult();
        event.preventDefault()
        const form = event.target;
         const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
            // navigate(location?.state? location?.state : "/")
            // get access token
            axios.post('http://localhost:5100/jwt',user)
            .then(res => {
                console.log(res.data)
            })
        })
        .catch(error => console.log(error)); fe
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center border mr-12 w-1/2 lg:text-left">
                        <img src={login} alt="#" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>
                                <p className="text-center my-4">New to Car Doctors <Link className="text-[#FF3811] font-semibold" to="/signup">Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;