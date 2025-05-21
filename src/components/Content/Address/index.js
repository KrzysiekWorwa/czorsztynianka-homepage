import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressHeader, AdressInfo, AddressSubHeader, LinkWrapper, AddressLink } from "./styled";

const Address = () => (
    <AddressSection>
        <AddressHeader>
            Dojazd i kontakt
        </AddressHeader>
        <AddressSubHeader>
            Dane kontaktowe
        </AddressSubHeader>
        <AdressInfo>
            <Info>
                P.H.U. “Jędruś” <br />
                Rejsy po Jeziorze Czorsztyńskim <br />
                34-440 Czorsztyn <br />
                ul. Krótka 6 <br />
            </Info>
            <LinkWrapper>
                <AddressLink href="tel:+48509438985" title="telefon">tel: 509 438 985</AddressLink>
            </LinkWrapper>
            <LinkWrapper>
                <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com">biuro@zalewczorsztynski.com</AddressLink>
            </LinkWrapper>
            <IconsWrapper>
                <a href="https://www.facebook.com/krzysztof.worwa/" target="_blank" title="Facebook" rel="noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/k_worwa/" target="_blank" title="Instagram" rel="noreferrer">
                    <InstagramIcon />
                </a>
            </IconsWrapper>
        </AdressInfo>
    </AddressSection>
);

export default Address;