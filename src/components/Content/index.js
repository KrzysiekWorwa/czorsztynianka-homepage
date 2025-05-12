import Cruises from "./Cruises";
import Offer from "./Offer";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <Offer />
            <Cruises />
        </ Container>
    );
};

export default Content;