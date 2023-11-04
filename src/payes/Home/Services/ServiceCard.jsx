import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id, title, img, price} = service;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF3811]">Price : {price}</p>
                    <div className="card-actions">
                        <Link to={`/BookService/${_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;