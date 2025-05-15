import { HousesSection, HousesHeader, HousesDescriptionSection, HousesDescription, HousesImageWrapper, HousesImage, HousesLink } from "./styled";
import houseImage from "./domek.jpg"

const Houses = () => (
    <HousesSection id="domki">
        <HousesHeader className="mobile-header">Domki "Zamkowe wzgórze"</HousesHeader>
        <HousesDescriptionSection>
            <HousesDescription>
                Oferujemy wynajem dwóch domków ulokowanych na brzegu Jeziora Czorsztyńskiego, tuż przy Zamku w Niedzicy. <br />
                Domki o metrażu 35 m kw, w pełni umeblowane, z wyposażoną kuchnią (lodówka, mikrofalówka, płyta indukcyjna, czajnik, naczynia do gotowania, zastawa stołowa dla 6 osób) i łazienką. Każdy z domków składa się z salonu z anksem kuchennym, dwóch sypialni i łazienki z prysznicem; posiada klimatyzację oraz WiFi. W salonie znajduje się telewizor. Do domków przynależą tarasy z meblami wypoczynkowymi. <br />
                Domek przeznaczony jest dla maksymalnie 6 osób. <br />
                <strong>Cennik:</strong><br />
                4 osoby: 400-500 zł/doba<br />
                Rezerwacje za pośrednictwem  <HousesLink href="https://www.booking.com/hotel/pl/zamkowe-wzgorze.pl.html" target="_blank" rel="noopener noreferrer">Booking.com</HousesLink> lub telefonicznie +48 509 923 730
            </HousesDescription>
        </HousesDescriptionSection>
        <HousesImageWrapper>
            <HousesImage src={houseImage} alt="Zdjęcie domku" />
            <HousesHeader className="desktop-header">Domki "Zamkowe wzgórze"</HousesHeader>
        </HousesImageWrapper>
    </HousesSection>
);

export default Houses;