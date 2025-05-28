import Address from "./Address";
import BikesPriceList from "./Bikes/BikesPriceList";
import PriceList from "./Cruises/PriceList";
import Offer from "./Offer";
import { Container } from "./styled";
import { cruisesData } from "./Cruises/data";
import { bikesData } from "./Bikes/data";
import { housesData } from "./Houses/data";
import ContentSection from "./ContentSection";
import Gallery from "../Gallery";
import { cruiseImages } from "./Cruises/images/cruiseImages";
import { housesImages } from "./Houses/images/housesImages";
import BikeRental from "../BikeRental";

const Content = () => {
    return (
        <Container>
            <Offer />
            <ContentSection {...cruisesData} />
            <PriceList />
            <Gallery title="Galeria zdjęć rejsów" images={cruiseImages} />
            <ContentSection {...housesData} />
            <Gallery title="Galeria zdjęć domków" images={housesImages} />
            <ContentSection {...bikesData} />
            <BikesPriceList />
            <BikeRental />
            <Address />
        </ Container>
    );
};

export default Content;