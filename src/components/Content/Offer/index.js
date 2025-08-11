import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";
import { Header } from "../styled";
import { List, Tile, Name, Description, ListWrapper } from "./styled";
import { Link } from "react-scroll";

const Offer = () => {
    return (
        <ListWrapper id="usługi">
            <StaggeredContainer>
                <StaggeredItem>
                    <Header>Nasza oferta</Header>
                </StaggeredItem>
                <StaggeredItem>
                    <List>
                        <Tile as={Link} to="rejsy-po-jeziorze" smooth={true} duration={600} offset={-90} style={{ cursor: 'pointer' }}>
                            <Name>Rejsy po jeziorze Czorsztyńskim</Name>
                            <Description>Przyroda w zasięgu ręki! Wyjątkowe gondole przewiozą Cię po Jeziorze Czorsztyńskim</Description>
                        </Tile>
                        <Tile as={Link} to="domki" smooth={true} duration={1000} offset={-90} style={{ cursor: 'pointer' }}>
                            <Name>Domki "Zamkowe wzgórze"</Name>
                            <Description>Wynajem dwóch domków ulokowanych na brzegu Jeziora Czorsztyńskiego, tuż przy Zamku w Niedzicy</Description>
                        </Tile>
                        <Tile as={Link} to="rowery" smooth={true} duration={1200} offset={-90} style={{ cursor: 'pointer' }}>
                            <Name>Wypożyczalnia rowerów "Velo Czorsztyn"</Name>
                            <Description>Wypożyczalnia rowerów tradycyjnych, elektrycznych oraz sprzętu rowerowego znajdująca się przy naszej przystani w Czorsztynie</Description>
                        </Tile>
                    </List>
                </StaggeredItem>
            </StaggeredContainer>
        </ListWrapper>
    );
};

export default Offer;