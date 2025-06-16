import { Header, Wrapper, StyledTable, TableHeader, TableCell, TableRow, Info, SubHeader, LinkWrapper, AddressLink, ContactWrapper, ContactInfo, ContactSection, PhoneIcon, MailIcon, PinIcon } from "../../styled";
import { ReactComponent as OneSideIcon } from "./priceIcons/1sideIcon.svg";
import { ReactComponent as TwoSideIcon } from "./priceIcons/2sidesIcon.svg";
import { ReactComponent as RoundIcon } from "./priceIcons/RoundIcon.svg";
import { ReactComponent as BikeIcon } from "./priceIcons/bicycle-54.svg";
import { ReactComponent as TrailerIcon } from "./priceIcons/bicycle-trailer-svgrepo-com.svg";

const PriceList = () => (
    <Wrapper id="cennik-rejsu">
        <Header>Cennik rejsów</Header>
        <StyledTable>
            <thead>
                <TableRow>
                    <TableHeader></TableHeader>
                    <TableHeader></TableHeader>
                    <TableHeader>Bilet normalny</TableHeader>
                    <TableHeader>Bilet ulgowy do lat 15</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Rejs w jedną stronę</TableCell>
                    <TableCell data-label="Ikona"><OneSideIcon /></TableCell>
                    <TableCell data-label="Bilet normalny">17 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">14 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Rejs w dwie strony</TableCell>
                    <TableCell data-label="Ikona"><TwoSideIcon /></TableCell>
                    <TableCell data-label="Bilet normalny">34 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">28 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Rejs widokowy dookoła jeziora</TableCell>
                    <TableCell data-label="Ikona"><RoundIcon /></TableCell>
                    <TableCell data-label="Bilet normalny">35 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">28 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Pasażer z rowerem</TableCell>
                    <TableCell data-label="Ikona"><BikeIcon /></TableCell>
                    <TableCell data-label="Cena biletu">27 PLN</TableCell>
                    <TableCell data-label="brak">-</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Przewóz przyczepki rowerowej</TableCell>
                    <TableCell data-label="Ikona"><TrailerIcon /></TableCell>
                    <TableCell data-label="Cena biletu">15 PLN</TableCell>
                    <TableCell data-label="brak">-</TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
        <Info>
            <strong> Dzieci do lat 4 bezpłatnie</strong> <br />
            Dla grup zorganizowanych (szkolnych, firmowych, wycieczek) możliwość rezerwacji rejsu.<br />
            W przypadku grup zorganizowanych możliwość negocjacji ceny. <br />
            Wystawiamy faktury VAT. <br />
        </Info>
        <ContactWrapper>
            <ContactSection>
                <SubHeader>
                    Dane kontaktowe
                </SubHeader>
                <ContactInfo>
                    W celu rezerwacji rejsu prosimy o kontakt <br /> telefoniczny lub mailowy:
                </ContactInfo>
                <LinkWrapper>
                    <AddressLink href="tel:+48509438985" title="telefon"><PhoneIcon /> 509 438 985</AddressLink>
                </LinkWrapper>
                <LinkWrapper>
                    <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com"><MailIcon />biuro@zalewczorsztynski.com</AddressLink>
                </LinkWrapper>
            </ContactSection>
            <ContactSection>
                <SubHeader>Nasza lokalizacja w Czorsztynie</SubHeader>
                <ContactInfo>
                    Przystań Czorsztynianka <br />
                    ul. Wronina 1 <br />
                    34-440 Czorsztyn
                    <LinkWrapper>
                        <AddressLink href="https://maps.app.goo.gl/vbb4muGnBGXNeTh29" target="_blank" rel="noopener noreferrer" title="Link do Google Maps"><PinIcon />Nawiguj z Google Maps</AddressLink>
                    </LinkWrapper>
                </ContactInfo>
            </ContactSection>
            <ContactSection>
                <SubHeader>Nasza lokalizacja w Niedzicy</SubHeader>
                <ContactInfo>
                    Pomost gondoli Czorsztynianka<br />
                    Osiedle Zamek 11 <br />
                    34-441 Niedzica
                    <LinkWrapper>
                        <AddressLink href="https://maps.app.goo.gl/FuhZFBqRTVSLS9eT6" target="_blank" rel="noopener noreferrer" title="Link do Google Maps"><PinIcon />Nawiguj z Google Maps</AddressLink>
                    </LinkWrapper>
                </ContactInfo>
            </ContactSection>
        </ContactWrapper>
    </Wrapper>
);

export default PriceList;
