import { Header, Description, CruisesSection, ContentWrapper } from "./styled";
import { CruiseImage } from "./styled";
import cruiseImage from "./cruise.jpg"

const Cruises = () => (
    <CruisesSection id="rejsy-po-jeziorze">
        <ContentWrapper>
            <Header>
                Rejsy gondolą po jeziorze Czorsztyńskim
            </Header>
            <Description>
                Oferujemy jedyną w swoim rodzaju i niepowtarzalną możliwość rejsu gondolami pomiędzy naszymi przystaniami na dwóch trasach. <br />
                Trasa łącząca ruiny zamków w Czorsztynie i Niedzicy, kurs stały, odbywa się co 15 minut z Czorsztyna lub Niedzicy. To idealna okazja swobodnego zwiedzenia okolicy na obydwu brzegach Jeziora Czorsztyńskiego. <br />
                Trasa dookoła Jeziora Czorsztyńskiego, rejs rusza z minimum 8 osobami na pokładzie gondoli, czas rejsu to około 40 minut, daje możliwość zapoznania się z malowniczymi zatoczkami i plażami jeziora, rejsy odbywają się po uzgodnieniu telefonicznym w godzinach porannych (9:00-10:00) popołudniowych (17:00-18:00) w sezonie (1 lipca -31 sierpnia). <br />
                Nasze gondole “Czorsztynianki” kursują codziennie, od 1 maja do 30 września, w godzinach 9.00 – 18.00 w sezonie (od 1 lipca do 31 sierpnia) oraz 10.00 – 16.00 poza sezonem (od 1 maj do 30 czerwca, od 1 września do 30 września). Dysponujemy 6 gondolami, które jednorazowo mogą zabrać 72 osoby. Na gondolach można przewozić rowery, zwierzęta są mile widziane. <br />
                Po rejsie zapraszamy do naszej przystani. Przystań Jędruś w Czorsztynie oferuje wiele możliwości spędzenia czasu nad urokliwym Jeziorem Czorsztyńskim. <br />
                W Przystani znajduje się także mała gastronomia, gdzie można zakupić zimne i ciepłe napoje, przekąski, lody, słodycze. Do dyspozycji gości oddajemy ogródek z ławkami, parasolami chroniącymi przed słońcem i deszczem, wygodne pufy i leżaki oraz hamaki w zacienionym zagajniku.
            </Description>
        </ContentWrapper>
        <CruiseImage src={cruiseImage} alt="Zdjęcie rejsu" />
    </CruisesSection>
);

export default Cruises;