import { Info, IconsWrapper, FacebookIcon, InstagramIcon, AddressSection, AddressHeader, AddressInfo, AddressSubHeader, LinkWrapper, AddressLink, AddressContentWrapper, MapContainer, PhoneIcon, MailIcon, PinIcon, TourIcon } from "./styled";
import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn"

const Address = () => (
    <AddressSection id="address">
        <StaggeredContainer>
            <StaggeredItem>
                <AddressHeader>
                    Dojazd i kontakt
                </AddressHeader>
            </StaggeredItem>
            <StaggeredItem>
                <AddressContentWrapper>
                    <AddressInfo>
                        <AddressSubHeader>
                            Dane kontaktowe
                        </AddressSubHeader>
                        <Info>
                            P.H.U. “Jędruś” Anna Wojtaszek<br />
                            NIP: 7351002376 <br />
                            ul. Krótka 6 <br />
                            34-440 Czorsztyn <br />
                        </Info>
                        <LinkWrapper>
                            <AddressLink href="tel:+48509438985" title="telefon"><PhoneIcon /> 509 438 985</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com"><MailIcon />biuro@zalewczorsztynski.com</AddressLink>
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
                            Przystań Czorsztynianka <br />
                            ul. Wronina 1 <br />
                            34-440 Czorsztyn <br />
                        </Info>
                        <LinkWrapper>
                            <AddressLink href="https://maps.app.goo.gl/vbb4muGnBGXNeTh29" target="_blank" rel="noopener noreferrer" title="Link do Google Maps"><PinIcon />Nawiguj z Google Maps</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="https://tour.panoee.net/czorsztynianka-przystan-w-czorsztynie" target="_blank" rel="noopener noreferrer" title="Wirtualny spacer po przystani w Czorsztynie"><TourIcon />Wirtualny spacer w Czorsztynie</AddressLink>
                        </LinkWrapper>
                    </AddressInfo>
                    <AddressInfo>
                        <AddressSubHeader>
                            Nasza lokalizacja w Niedzicy
                        </AddressSubHeader>
                        <Info>
                            Pomost gondoli Czorsztynianka <br />
                            Osiedle Zamek 11 <br />
                            34-441 Niedzica <br />
                        </Info>
                        <LinkWrapper>
                            <AddressLink href="https://maps.app.goo.gl/FuhZFBqRTVSLS9eT6" target="_blank" rel="noopener noreferrer" title="Link do Google Maps"><PinIcon />Nawiguj z Google Maps</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href="https://tour.panoee.net/czorsztynianka-przystan-w-niedzicy" target="_blank" rel="noopener noreferrer" title="Wirtualny spacer po przystani w Niedzicy"><TourIcon />Wirtualny spacer w Niedzicy</AddressLink>
                        </LinkWrapper>
                    </AddressInfo>
                </AddressContentWrapper>
            </StaggeredItem>
        </StaggeredContainer>
        <StaggeredContainer>
            <StaggeredItem>
                <MapContainer>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1MSsHZcFj2lej3zLBJaKp4IMEOSX9vps&ehbc=2E312F&noprof=1" width="640" height="480" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        async
                        defer>
                    </iframe>
                </MapContainer>
            </StaggeredItem>
        </StaggeredContainer>


    </AddressSection>
);

export default Address;