import {
BikesSection, BikesDescription, BikesDescriptionSection, BikesHeader, BikesImage, BikesImageWrapper
} from "./styled";

import bikesImage from "./rowery.jpg";

const Bikes = () => (
    <BikesSection id="rowery">
        <BikesHeader className="mobile-header">Wypożyczalnia rowerów "Velo Czorsztyn"</BikesHeader>
        <BikesDescriptionSection>
            <BikesDescription>
               Zapraszamy do naszej wypożyczalni "Velo Czorsztyn" znajdującej się na naszej przystani gondoli. <br />
               Posiadamy duży wybór rowerów tradycyjnych, elektrycznych oraz sprzętu rowerowego.<br />
               Dodatkowo nasi klienci mają możliwość <strong>darmowego przewozu wypożyczonego roweru</strong> naszymi gondolami. Jest to łatwiejszy wariant zrobienia pętli dookoła jeziora. <br />
               Zapraszamy do kontaktu i składania rezerwacji pod numerem telefonu: <strong>570 631 403</strong>
            </BikesDescription>
        </BikesDescriptionSection>
        <BikesImageWrapper>
            <BikesImage src={bikesImage} alt="Zdjęcie rowerów" />
            <BikesHeader className="desktop-header">Wypożyczalnia rowerów "Velo Czorsztyn"</BikesHeader>
        </BikesImageWrapper>
    </BikesSection>
);

export default Bikes;
