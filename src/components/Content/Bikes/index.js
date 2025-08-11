import { useShowMore } from "../../../hooks/useShowMore";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";
import { BoldText, ButtonDiv, CruiseSubHeader, CruiseWrapper, Description, ListItem, ShowMoreButton, ShowMoreContent, StyledList } from "../styled";


const Bikes = () => {

    const { showAll, handleToggle, buttonRef } = useShowMore();

    return (
        <CruiseWrapper>
            <StaggeredContainer>
                <ShowMoreContent $isVisible={showAll}>
                    <StaggeredItem>
                        <CruiseSubHeader>Szeroka Oferta i Komfortowy Sprzęt</CruiseSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            W naszej wypożyczalni czeka na Ciebie bogaty wybór sprawdzonych, regularnie serwisowanych rowerów, idealnych zarówno dla początkujących, jak i doświadczonych cyklistów:
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <StyledList>
                            <ListItem>
                                <BoldText>Rowery tradycyjne: </BoldText>
                                Lekkie, wygodne i gotowe do jazdy po trasie Velo Czorsztyn i pobliskich szlakach. Doskonałe dla tych, którzy cenią klasykę i chcą o własnych siłach pokonać każde wzniesienie.
                            </ListItem>
                            <ListItem>
                                <BoldText>Rowery elektryczne: </BoldText>
                                Dla tych, którzy cenią sobie komfort i chcą bez wysiłku pokonywać dłuższe dystanse lub wymagające podjazdy, ciesząc się widokami bez nadmiernego zmęczenia.
                            </ListItem>
                            <ListItem>
                                <BoldText>Rowery dziecięce i sprzęt dodatkowy: </BoldText>
                                Mamy wszystko, by cała rodzina mogła bezpiecznie ruszyć w trasę. Oferujemy rowery dziecięce, foteliki, przyczepki rowerowe oraz kaski w różnych rozmiarach.
                            </ListItem>
                        </StyledList>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Wypożyczenie sprzętu odbywa się szybko i sprawnie – nasi pracownicy chętnie doradzą w wyborze najlepszego roweru i odpowiedniego rozmiaru, a także podpowiedzą, którą trasę wybrać oraz podzielą się przydatnymi wskazówkami, które pomogą w pełni cieszyć się rowerową przygodą i odkrywać najpiękniejsze zakątki Jeziora Czorsztyńskiego i Pienin!
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <CruiseSubHeader>Przeprawa Gondolą – Wygoda i Oszczędność Czasu</CruiseSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Wypożyczając rower w naszej wypożyczalni, zyskujesz <BoldText>darmowy przewóz sprzętu na pokładzie gondoli</BoldText>, kursującej między zamkami w Czorsztynie i Niedzicy. To idealne rozwiązanie, które znacznie ułatwia logistykę i pozwala na:
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <StyledList>
                            <ListItem>
                                <BoldText>Wykonanie pełnej pętli malowniczą trasą „Velo Czorsztyn” </BoldText>
                                bez konieczności powrotu tą samą drogą lub pokonywania dodatkowych 12 kilometrów poboczem drogi aby zamknąć pętlę.
                            </ListItem>
                            <ListItem>
                                <BoldText>Połączenie dwóch kluczowych punktów „Velo Czorsztyn”</BoldText>
                                , umożliwiając komfortowe rozpoczęcie lub kontynuowanie trasy po obu stronach jeziora.
                            </ListItem>
                            <ListItem>
                                <BoldText>Połączenie wycieczki rowerowej ze zwiedzaniem zamków </BoldText>
                                po obu stronach jeziora i odpoczynkiem nad wodą.
                            </ListItem>
                            <ListItem>
                                <BoldText>Oszczędność czasu i energii </BoldText>
                                dzięki czemu możesz w pełni skupić się na czerpaniu radości z jazdy i otaczających widoków.
                            </ListItem>
                            <ListItem>
                                <BoldText>Dodatkowe urozmaicenie wycieczki</BoldText>
                                , wprowadzając element wodnej przygody i oferując wyjątkowe widoki na zamki oraz okolicę z perspektywy jeziora.
                            </ListItem>
                        </StyledList>
                    </StaggeredItem>
                    <StaggeredItem>
                        <CruiseSubHeader>Dla Kogo?</CruiseSubHeader>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            Nasza wypożyczalnia to idealna opcja dla każdego, kto chce aktywnie spędzić czas nad Jeziorem Czorsztyńskim:
                        </Description>
                    </StaggeredItem>
                    <StaggeredItem>
                        <StyledList>
                            <ListItem>
                                <BoldText>Dla rodzin z dziećmi: </BoldText>
                                Bezpieczne rowery i akcesoria dla najmłodszych gwarantują udaną wspólną przygodę.
                            </ListItem>
                            <ListItem>
                                <BoldText>Dla turystów pieszych: </BoldText>
                                Jeśli chcesz odkryć region z innej perspektywy i zobaczyć więcej w krótszym czasie.
                            </ListItem>
                            <ListItem>
                                <BoldText>Dla miłośników natury: </BoldText>
                                Połącz ruch na świeżym powietrzu z podziwianiem zapierających dech w piersiach krajobrazów Pienin i Jeziora Czorsztyńskiego.
                            </ListItem>
                        </StyledList>
                    </StaggeredItem>
                    <StaggeredItem>
                        <Description>
                            <BoldText>Odkryj region w aktywny sposób z wypożyczalnią „Velo Czorsztyn”!</BoldText> Ciesz się swobodą jazdy, zapierającymi dech w piersiach widokami i niezapomnianą przygodą na dwóch kółkach. Serdecznie zapraszamy!
                        </Description>
                    </StaggeredItem>
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

export default Bikes;