import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect (() => {
        fetch('services.json')
        .then (res => res.json())
        .then(data => setServices(data))
    },[]) 

    return (

        <div>
            <div className="text-center">
                <h2 className="text-3xl font-medium text-[#FF3811]">Service</h2>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map(service => <ServiceCard 
                            key={service.id}
                            service = {service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;