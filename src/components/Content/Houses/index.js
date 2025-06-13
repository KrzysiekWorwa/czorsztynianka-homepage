import { useShowMore } from "../../../hooks/useShowMore";
import { BoldText, ButtonDiv, CruiseSubHeader, CruiseWrapper, Description, ListItem, ListTitle, ShowMoreButton, ShowMoreContent, StyledList } from "../styled";


const Houses = () => {

    const { showAll, handleToggle, buttonRef } = useShowMore();

    return (
        <CruiseWrapper>
            <ShowMoreContent $isVisible={showAll}>
                <CruiseSubHeader>Wyposażenie i udogodnienia Domków</CruiseSubHeader>
                <Description>
                    Każdy z naszych dwóch domków, o przytulnym metrażu 35 m², został zaprojektowany tak, aby zapewnić maksymalny komfort i funkcjonalność dla naszych Gości. To w pełni umeblowane i nowocześnie wyposażone przestrzenie, gotowe na przyjęcie do 6 osób.
                </Description>
                <ListTitle>Każdy domek oferuje:</ListTitle>
                <StyledList>
                    <ListItem>
                        <BoldText>Przestronny Salon z aneksem kuchennym: </BoldText>
                        Serce domku, idealne miejsce na wspólne posiłki i wieczorne rozmowy. Znajdziesz tu wygodną część wypoczynkową oraz telewizor, zapewniający rozrywkę po dniu pełnym wrażeń.
                    </ListItem>
                    <ListItem>
                        <BoldText>W pełni wyposażoną Kuchnię: </BoldText>
                        Gotowanie stanie się przyjemnością dzięki kompletnemu wyposażeniu: lodówce, mikrofalówce, płycie indukcyjnej, czajnikowi, a także wszelkim niezbędnym naczyniom do gotowania i pełnej zastawie stołowej dla 6 osób.
                    </ListItem>
                    <ListItem>
                        <BoldText>Dwie Przytulne Sypialnie: </BoldText>
                        Idealne na odpoczynek po dniu pełnym przygód, zapewniające komfortowy sen.
                    </ListItem>
                    <ListItem>
                        <BoldText>Nowoczesną Łazienkę z Prysznicem: </BoldText>
                        Estetyczna i funkcjonalna, z dbałością o każdy detal.
                    </ListItem>
                    <ListItem>
                        <BoldText>Klimatyzację: </BoldText>
                        Gwarantuje przyjemną temperaturę nawet w upalne dni, zapewniając komfortowy wypoczynek.
                    </ListItem>
                    <ListItem>
                        <BoldText>Darmowe Wi-Fi: </BoldText>
                        Bądź w kontakcie ze światem lub dziel się swoimi wspomnieniami z wakacji bez ograniczeń.
                    </ListItem>
                    <ListItem>
                        <BoldText>Bezpłatny parking: </BoldText>
                        Prywatny parking z bramą znajdujący się na ogrodzonym terenie domków.
                    </ListItem>
                    <ListItem>
                        <BoldText>Udogodnienia: </BoldText>
                        Trampolina dla dzieci oraz miejsce do grillowania obok domku.
                    </ListItem>
                </StyledList>
                <CruiseSubHeader>Twój Prywatny Taras z Widokiem</CruiseSubHeader>
                <Description>
                    Do każdego domku przynależy przestronny taras, wyposażony w komfortowe meble wypoczynkowe. To idealne miejsce na poranną kawę z widokiem na jezioro, relaks z książką w ciągu dnia czy wieczorne biesiadowanie pod gwiazdami. Ciesz się świeżym powietrzem i urokami otaczającej przyrody, mając jednocześnie prywatną przestrzeń tylko dla siebie.
                </Description>
                <CruiseSubHeader>Idealna Lokalizacja</CruiseSubHeader>
                <Description>
                    Domki "Zamkowe Wzgórze" to nie tylko komfortowe wnętrza, ale przede wszystkim niezrównana lokalizacja. Znajdują się na samym brzegu Jeziora Czorsztyńskiego, co gwarantuje łatwy dostęp do wody i możliwość podziwiania spektakularnych widoków. Bezpośrednie sąsiedztwo Zamku w Niedzicy, plaży przy jeziorze oraz przystani gondoli sprawia, że natura, historia oraz atrakcje jeziora są na wyciągnięcie ręki. To doskonała baza wypadowa do zwiedzania Pienin, spływu Dunajcem, pieszych wędrówek czy wycieczek rowerowych.
                </Description>
                <CruiseSubHeader>Atrakcje w okolicy</CruiseSubHeader>
                <ListTitle>Najpopularniejsze atrakcje w okolicy domków i jeziora Czorsztyńskiego:</ListTitle>
                <StyledList>
                    <ListItem>
                        <BoldText>Jezioro Czorsztyńskie: </BoldText>
                        malowniczy zbiornik wodny, powstały na Dunajcu, idealny do aktywnego wypoczynku i relaksu.
                    </ListItem>
                    <ListItem>
                        <BoldText>Zamek Dunajec w Niedzicy: </BoldText>
                        świetnie zachowana, XIV-wieczna warownia, z którą wiąże się wiele legend np. o Inkach i skarbie, Białej Damie.
                    </ListItem>
                    <ListItem>
                        <BoldText>Zapora Wodna w Niedzicy: </BoldText>
                        Imponująca konstrukcja, zapora, która spiętrza wody Dunajca i tworzy Jezioro Czorsztyńskie.
                    </ListItem>
                    <ListItem>
                        <BoldText>Zamek w Czorsztynie: </BoldText>
                        malownicze ruiny królewskiego zamku, położone na wzgórzu po drugiej stronie Jeziora Czorsztyńskiego.
                    </ListItem>
                    <ListItem>
                        <BoldText>Trasa rowerowa Velo Czorsztyn: </BoldText>
                        piękna, 28 kilometrowa trasa rowerowa wokół Jeziora Czorsztyńskiego łącząca oba zamki.
                    </ListItem>
                    <ListItem>
                        <BoldText>Rejsy Gondolami: </BoldText>
                        widokowe rejsy między zamkami. To fantastyczny sposób na podziwianie obu zamków i panoramy Pienin z wody.
                    </ListItem>
                    <ListItem>
                        <BoldText>Wypożyczalnie rowerów: </BoldText>
                        punkty umożliwiające wypożyczenie roweru i pokonanie malowniczych tras rowerowych w okolicy.
                    </ListItem>
                    <ListItem>
                        <BoldText>Plaża Pieniny: </BoldText>
                        piaszczysta plaża i strzeżone kąpielisko, świetne na letni relaks i kąpiele, zlokalizowane u podnóża zamku.
                    </ListItem>
                    <ListItem>
                        <BoldText>Wypożyczalnie sprzętu wodnego: </BoldText>
                        Kajaki, rowerki wodne, łódki – idealne do samodzielnego odkrywania jeziora.
                    </ListItem>
                    <ListItem>
                        <BoldText>Spływ Przełomem Dunajca: </BoldText>
                        jedna z najbardziej znanych atrakcji Pienin, spływ tradycyjnymi drewnianymi tratwami przez malowniczy przełom Dunajca.
                    </ListItem>
                    <ListItem>
                        <BoldText> Piesze szlaki turystyczne: </BoldText>
                        Trzy Korony, Sokolica, Polana Cisówka, Góra Wdżar i wiele innych przepięknych miejsc z których można podziwiać roztaczającą się panoramę jeziora, Tatr i Pienin.
                    </ListItem>
                </StyledList>
            </ShowMoreContent>

            <ButtonDiv>
                <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                    {showAll ? "Zwiń opis" : "Pokaż pełny opis"}
                </ShowMoreButton>
            </ButtonDiv>

        </CruiseWrapper>
    );
};

export default Houses;