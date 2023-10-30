import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute  top-1/2 right-8 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2 space-y-5">
                    <h2 className="text-red-500 font-semibold">About Us</h2>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-warning bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;