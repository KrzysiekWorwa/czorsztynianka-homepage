import { Wrapper, Header, List, Tile, Name, Description } from "./styled";
import { Link } from "react-scroll";

const Offer = () => {
    return (
        <Wrapper>
            <Header>Nasza oferta</Header>
            <List>
                <Tile as={Link} to="rejsy-po-jeziorze" smooth={true} duration={600} offset={-70} style={{ cursor: 'pointer' }}>
                    <Name>Rejsy po jeziorze Czorsztyńskim</Name>
                    <Description>Przyroda w zasięgu ręki! Wyjątkowe gondole przewiozą Cię po Jeziorze Czorsztyńskim</Description>
                </Tile>
                <Tile>
                    <Name>Domki "Zamkowe wzgórze"</Name>
                    <Description>Wynajem dwóch domków ulokowanych na brzegu Jeziora Czorsztyńskiego, tuż przy Zamku w Niedzicy.</Description>
                </Tile>
                <Tile>
                    <Name>Wypożyczalnia rowerów "Velo Czorsztyn"</Name>
                    <Description>Wypożyczalnia rowerów tradycyjnych, elektycznych oraz sprzętu rowerowego znajdująca się przy naszej przystani w Czorsztynie.</Description>
                </Tile>
            </List>
        </Wrapper>
    );
};

export default Offer;