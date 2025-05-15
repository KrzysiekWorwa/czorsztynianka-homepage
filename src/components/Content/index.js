import Bikes from "./Bikes";
import Cruises from "./Cruises";
import PriceList from "./Cruises/PriceList";
import Houses from "./Houses";
import Offer from "./Offer";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <Offer />
            <Cruises />
            <PriceList />
            <Houses />
            <Bikes />
        </ Container>
    );
};

export default Content;