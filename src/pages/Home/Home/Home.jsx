import useTitle from "../../../hooks/useTitle";
import Toys from "../Toys/Toys";


const Home = () => {
    useTitle('Home')
    return (
        <div className="container mx-auto">
            <Toys></Toys>
        </div>
    );
};

export default Home;