import { Header, Wrapper, StyledTable, TableHeader, TableCell, TableRow, Info, SubHeader, LinkWrapper, AddressLink, ContactWrapper } from "../../styled";
import { ReactComponent as BikeIcon } from "./bikesIcons/bicycle-54.svg";
import { ReactComponent as ElectricBikeIcon } from "./bikesIcons/bicycle-electric-svgrepo-com.svg";
import { ReactComponent as TrailerIcon } from "./bikesIcons/bicycle-trailer-svgrepo-com.svg";
import { ReactComponent as SeatIcon } from "./bikesIcons/car-seat-with-seatbelt-svgrepo-com.svg";
import { ReactComponent as HelmetIcon } from "./bikesIcons/bicycle-helmet-svgrepo-com.svg";

const BikesPriceList = () => (
    <Wrapper id="cennik-wypozyczalni">
        <Header>Cennik wypożyczalni rowerów</Header>
        <StyledTable>
            <thead>
                <TableRow>
                    <TableHeader></TableHeader>
                    <TableHeader></TableHeader>
                    <TableHeader>Do 3 godzin</TableHeader>
                    <TableHeader>Cały dzień</TableHeader>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Rower klasyczny</TableCell>
                    <TableCell data-label="Ikona"><BikeIcon /></TableCell>
                    <TableCell data-label="Do 3 godzin">50 PLN</TableCell>
                    <TableCell data-label="Cały dzień">60 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Rower elektryczny</TableCell>
                    <TableCell data-label="Ikona"><ElectricBikeIcon /></TableCell>
                    <TableCell data-label="Do 3 godzin">150 PLN</TableCell>
                    <TableCell data-label="Cały dzień">200 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Przyczepka</TableCell>
                    <TableCell data-label="Ikona"><TrailerIcon /></TableCell>
                    <TableCell data-label="Do 3 godzin">60 PLN</TableCell>
                    <TableCell data-label="Cały dzień">60 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Fotelik dziecięcy</TableCell>
                    <TableCell data-label="Ikona"><SeatIcon /></TableCell>
                    <TableCell data-label="Do 3 godzin">30 PLN</TableCell>
                    <TableCell data-label="Cały dzień">30 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Kask</TableCell>
                    <TableCell data-label="Ikona"><HelmetIcon /></TableCell>
                    <TableCell data-label="Do 3 godzin">10 PLN</TableCell>
                    <TableCell data-label="Cały dzień">10 PLN</TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
        <Info>* cały dzień jest rozumiany w godzinach otwarcia wypożyczalni <br />
        <strong>Klienci mają możliwość darmowego przewozu wypożyczonego roweru naszymi gondolami</strong>
        </Info>
        <ContactWrapper>
            <SubHeader>
                W celu rezerwacji rowerów prosimy o kontakt telefoniczny lub mailowy:
            </SubHeader>
            <LinkWrapper>
                <AddressLink href="tel:+48570631403" title="telefon">tel: 570 631 403</AddressLink>
            </LinkWrapper>
            <LinkWrapper>
                <AddressLink href="mailto:velo@zalewczorsztynski.com" title="velo@zalewczorsztynski.com">velo@zalewczorsztynski.com</AddressLink>
            </LinkWrapper>
        </ContactWrapper>
    </Wrapper>
);

export default BikesPriceList;
