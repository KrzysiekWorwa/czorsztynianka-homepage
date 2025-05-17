import { Header, Wrapper } from "../../Offer/styled";
import { StyledTable, TableHeader, TableCell, TableRow } from "./styled";
import { ReactComponent as BikeIcon } from "./bicycle-54.svg";
import { ReactComponent as ElectricBikeIcon } from "./bicycle-electric-svgrepo-com.svg";
import { ReactComponent as TrailerIcon } from "./bicycle-trailer-svgrepo-com.svg";
import { ReactComponent as SeatIcon } from "./car-seat-with-seatbelt-svgrepo-com.svg";
import { ReactComponent as HelmetIcon } from "./bicycle-helmet-svgrepo-com.svg";

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
    </Wrapper>
);

export default BikesPriceList;
