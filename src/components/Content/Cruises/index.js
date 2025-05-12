import { Header, Description, CruisesSection, ContentWrapper } from "./styled";
import { CruiseImage } from "./styled";
import cruiseImage from "./cruise.jpg"

const Cruises = () => (
    <CruisesSection>
        <ContentWrapper>
            <Header>
                Rejsy gondolą po jeziorze Czorsztyńskim
            </Header>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum.
            </Description>
        </ContentWrapper>
        <CruiseImage src={cruiseImage} alt="Zdjęcie rejsu"/>
    </CruisesSection>
);

export default Cruises;