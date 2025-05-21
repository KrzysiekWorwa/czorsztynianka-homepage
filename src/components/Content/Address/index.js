import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressHeader, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, MapContainer } from "./styled";

const Address = () => (
    <AddressSection id="address">
        <AddressHeader>
            Dojazd i kontakt
        </AddressHeader>

        <AddressContentWrapper>
            <AddressInfo>
                <AddressSubHeader>
                    Dane kontaktowe
                </AddressSubHeader>
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
                    <a href="https://www.facebook.com/przystanczorsztynianka" target="_blank" title="Facebook" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/czorsztynianka/" target="_blank" title="Instagram" rel="noreferrer">
                        <InstagramIcon />
                    </a>
                </IconsWrapper>
            </AddressInfo>
            <AddressInfo>
                <AddressSubHeader>
                    Nasza lokalizacja w Czorsztynie
                </AddressSubHeader>
                <Info>
                    Przystań "Jędruś" <br />
                    ul. Wronina 1 <br />
                    34-440 Czorsztyn <br />
                </Info>
                <AddressSubHeader>
                    Nasza lokalizacja w Niedzicy
                </AddressSubHeader>
                <Info>
                    Pomost dla gondoli Niedzica <br />
                    Osiedle Zamek 11 <br />
                    34-441 Niedzica <br />
                </Info>
            </AddressInfo>
        </AddressContentWrapper>
        <MapContainer>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/d/embed?mid=13k4xwGEBhTU3bLLLbFupekUsafs&ehbc=2E312F" width="640" height="480" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                async
                defer>
            </iframe>
        </MapContainer>


    </AddressSection>
);

export default Address;