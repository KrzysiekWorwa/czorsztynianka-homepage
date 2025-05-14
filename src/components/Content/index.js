import Cruises from "./Cruises";
import Prices from "./Cruises/Price";
import Offer from "./Offer";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <Offer />
            <Cruises />
            <Prices />
        </ Container>
    );
};

export default Content;