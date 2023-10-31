import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDl
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center border mr-12 w-1/2 lg:text-left">
                        <img src={login} alt="#" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form className="card-body">
                            <h1 className="text-4xl font-bold text-center">SignUp</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="text" value="Sign Up" />
                                </div>
                                <p className="text-center my-4">Already Have an Account? <Link className="text-[#FF3811] font-bold" to="/login">Login</Link></p>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SignUp;