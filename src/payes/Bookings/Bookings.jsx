import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { data } from "autoprefixer";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5100/bookings?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Bookings;