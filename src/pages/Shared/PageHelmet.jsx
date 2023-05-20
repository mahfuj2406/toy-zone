
import {Helmet} from "react-helmet";

const PageHelmet = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>ToyZone || {title}</title>
            </Helmet>
        </div>
    );
};

export default PageHelmet;