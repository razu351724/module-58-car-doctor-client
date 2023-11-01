import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service;

    return (
        <div>
            <h2>Book Service: {title}</h2>

            <form className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-active btn-block btn-[#FF3811] rounded-none bg-[#FF3811]" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;