import { Header, Description, CruiseImage } from "./styled";
import Image from "./cruise.jpg"

const Cruises = () => (
    <>
        <Header>
            Rejsy gondolą po jeziorze Czorsztyńskim
        </Header>
        <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque suscipit ab odio cupiditate? Repudiandae, neque libero, vel impedit, autem dolorem sed beatae unde similique exercitationem adipisci error minima itaque ipsum.
        </Description>
        <CruiseImage src={Image} />
        <Header>
            Cennik rejsów
        </Header>
    </>
);

export default Cruises;