import useTitle from "../../../hooks/useTitle";
import Toys from "../Toys/Toys";
import Banner from "./Banner";
import CustomerRiview from "./CustomerRiview";
import Favourite from "./Favourite";
import Gallery from "./Gallery";
import NewsLetter from "./NewsLetter";


const Home = () => {
    useTitle('Home')
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            {/* <Testimonials></Testimonials> */}
            <Gallery></Gallery>
            <Toys></Toys>
            <Favourite></Favourite>
            <CustomerRiview></CustomerRiview>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;