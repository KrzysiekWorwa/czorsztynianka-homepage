import { Header, Wrapper, StyledTable, TableHeader, TableCell, TableRow, Info, SubHeader, LinkWrapper, AddressLink, ContactWrapper } from "../../styled";
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
                    <TableHeader>Bilet ulgowy do lat 10</TableHeader>
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
                    <TableCell data-label="Bilet normalny">27 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">Dzieci do lat 4 <strong>bezpłatnie</strong></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Przewóz przyczepki rowerowej</TableCell>
                    <TableCell data-label="Ikona"><TrailerIcon /></TableCell>
                    <TableCell data-label="Bilet normalny">15 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">15 PLN</TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
        <Info>
            <strong>Dla grup zorganizowanych (szkolnych, firmowych, wycieczek)</strong> możliwość rezerwacji rejsu.<br />
            W przypadku grup zorganizowanych możliwość negocjacji ceny. <br />
            Wystawiamy faktury VAT. <br />
        </Info>
        <ContactWrapper>
            <SubHeader>
                W celu rezerwacji rejsu prosimy o kontakt telefoniczny lub mailowy:
            </SubHeader>
            <LinkWrapper>
                <AddressLink href="tel:+48509438985" title="telefon">tel: 509 438 985</AddressLink>
            </LinkWrapper>
            <LinkWrapper>
                <AddressLink href="mailto:biuro@zalewczorsztynski.com" title="biuro@zalewczorsztynski.com">biuro@zalewczorsztynski.com</AddressLink>
            </LinkWrapper>
        </ContactWrapper>
    </Wrapper>
);

export default PriceList;
