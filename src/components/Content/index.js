import Cruises from "./Cruises";
import PriceList from "./Cruises/PriceList";
import Offer from "./Offer";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <Offer />
            <Cruises />
            <PriceList />
        </ Container>
    );
};

export default Content;