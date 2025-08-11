import { Link } from "react-scroll";
import { useShowMore } from "../../../hooks/useShowMore";
import { BoldText, ButtonDiv, CruiseSubHeader, CruiseWrapper, Description, ListItem, ListTitle, ShowMoreButton, ShowMoreContent, SocialLink, StyledList } from "../styled";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";

const Cruises = () => {

    const { showAll, handleToggle, buttonRef } = useShowMore();

    return (
        <CruiseWrapper>
            <StaggeredContainer>
                <ShowMoreContent $isVisible={showAll}>
                    <StaggeredItem>
                    <CruiseSubHeader>Dostępne trasy rejsów</CruiseSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                    <ListTitle>Przeprawa pomiędzy Zamkami w Czorsztynie i Niedzicy</ListTitle>
                    </StaggeredItem>
                    <StyledList>
                        <StaggeredItem>
                        <ListItem>
                            <BoldText> Opis: </BoldText>
                            Ta trasa to idealna okazja do swobodnego zwiedzenia okolicy na obydwu brzegach Jeziora Czorsztyńskiego. Podziwiaj ruiny zamków w Czorsztynie i Niedzicy, przemieszczając się komfortowo między nimi.
                        </ListItem>
                        </StaggeredItem>
                        <StaggeredItem>
                        <ListItem>
                            <BoldText>Częstotliwość: </BoldText>
                            Kursy stałe, odbywają się co 15 minut.
                        </ListItem>
                        </StaggeredItem>
                        <StaggeredItem>
                        <ListItem>
                            <BoldText> Punkty startowe: </BoldText>
                            Z Czorsztyna lub Niedzicy.
                        </ListItem>
                        </StaggeredItem>
                        <StaggeredItem>
                        <ListItem>
                            <BoldText>Dla kogo: </BoldText>
                            Idealna opcja dla tych, którzy chcą połączyć rejs z pieszym zwiedzaniem zamków lub rowerzystów którzy chcą skorzystać z łatwiejszego wariantu zrobienia pętli dookoła jeziora ścieżką Velo Czorsztyn i przeprawić się na drugi brzeg z rowerem
                        </ListItem>
                        </StaggeredItem>
                    </StyledList>
                    <ListTitle>Rejs widokowy dookoła Jeziora Czorsztyńskiego</ListTitle>
                    <StyledList>
                        <ListItem>
                            <BoldText> Opis: </BoldText>
                            Rejs dookoła Jeziora Czorsztyńskiego to wyjątkowa okazja do zapoznania się z zamkami, zaporą oraz malowniczymi zatoczkami i urokliwymi miejscami z perspektywy wody. Ciesz się widokami i spokojem natury.
                        </ListItem>
                        <ListItem>
                            <BoldText>Czas trwania: </BoldText>
                            Około 40 minut.
                        </ListItem>
                        <ListItem>
                            <BoldText> Wymagania: </BoldText>
                            Rejs może się odbyć przy minimum 8 osobach na pokładzie gondoli, po wcześniejszym uzgodnieniu.
                        </ListItem>
                        <ListItem>
                            <BoldText>Wskazówka: </BoldText>
                            W sezonie (1 lipca - 31 sierpnia) rejsy mogą odbywać się w godzinach porannych (9:00-10:00) i popołudniowych (17:00-18:00). Ze względu na wymagane minimum osób, prosimy o wcześniejszy kontakt telefoniczny w celu uzgodnienia szczegółów.
                        </ListItem>
                    </StyledList>
                    <CruiseSubHeader>Godziny Kursowania Gondoli</CruiseSubHeader>
                    <Description>
                        Nasze gondole "Czorsztynianki" kursują codziennie, zapewniając elastyczność planowania Twojej wycieczki.
                    </Description>
                    <StyledList>
                        <ListItem>
                            <BoldText>Sezon </BoldText>
                            (od 1 lipca do 31 sierpnia): 9:00 – 18:00
                        </ListItem>
                        <ListItem>
                            <BoldText>Poza sezonem </BoldText>
                            (od 1 maja do 30 czerwca, od 1 września do 30 września): 10:00 – 16:00
                        </ListItem>
                        <ListItem>
                            <BoldText>Ważne: </BoldText>
                            Ze względów pogodowych godziny rejsów mogą ulec zmianie. O aktualnych godzinach lub ewentualnych zmianach informujemy codziennie i na bieżąco na naszych <SocialLink as={Link} to="address" smooth={true} duration={1000} offset={-90} style={{ cursor: 'pointer' }}>social mediach.</SocialLink>
                        </ListItem>
                    </StyledList>
                    <CruiseSubHeader>Dodatkowe informacje</CruiseSubHeader>
                    <StyledList>
                        <ListItem>
                            <BoldText>Flota: </BoldText>
                            Dysponujemy 6 komfortowymi gondolami.
                        </ListItem>
                        <ListItem>
                            <BoldText>Pojemność: </BoldText>
                            Jednorazowo możemy zabrać do 72 osób (12 osób na gondolę).
                        </ListItem>
                        <ListItem>
                            <BoldText>Dla rowerzystów: </BoldText>
                            Na gondolach można przewozić rowery oraz przyczepki rowerowe.
                        </ListItem>
                        <ListItem>
                            <BoldText>Dla pupili: </BoldText>
                            Zwierzęta są mile widziane na pokładzie.
                        </ListItem>
                    </StyledList>
                    <CruiseSubHeader>Przystań Czorsztynianka w Czorsztynie</CruiseSubHeader>
                    <Description>
                        Po rejsie zapraszamy do naszej przystani w Czorsztynie, która oferuje wiele możliwości spędzenia czasu nad urokliwym Jeziorem Czorsztyńskim.
                    </Description>
                    <StyledList>
                        <ListItem>
                            <BoldText>Mała gastronomia: </BoldText>
                            Dostępne są zimne i ciepłe napoje, przekąski, lody oraz słodycze.
                        </ListItem>
                        <ListItem>
                            <BoldText>Strefa relaksu: </BoldText>
                            Do dyspozycji gości oddajemy urokliwy ogródek z ławkami, parasolami chroniącymi przed słońcem i deszczem, wygodne pufy i leżaki, a także hamaki w zacienionym zagajniku. Idealne miejsce na odpoczynek po rejsie lub w przerwie podczas pokonywania trasy rowerowej dookoła jeziora.
                        </ListItem>
                    </StyledList>
                </ShowMoreContent>

                <ButtonDiv>
                    <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                        {showAll ? "Zwiń opis" : "Pokaż pełny opis"}
                    </ShowMoreButton>
                </ButtonDiv>
            </StaggeredContainer>
        </CruiseWrapper>
    );
};

export default Cruises;