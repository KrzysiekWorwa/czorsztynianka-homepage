import { Header, Wrapper } from "../../Offer/styled";
import { StyledTable, TableHeader, TableCell, TableRow } from "./styled";

const BikesPriceList = () => (
    <Wrapper>
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
                    <TableCell data-label="Ikona"></TableCell>
                    <TableCell data-label="Do 3 godzin">50 PLN</TableCell>
                    <TableCell data-label="Cały dzień">60 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Rower elektryczny</TableCell>
                    <TableCell data-label="Ikona"></TableCell>
                    <TableCell data-label="Do 3 godzin">150 PLN</TableCell>
                    <TableCell data-label="Cały dzień">200 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Przyczepka</TableCell>
                    <TableCell data-label="Ikona"></TableCell>
                    <TableCell data-label="Do 3 godzin">60 PLN</TableCell>
                    <TableCell data-label="Cały dzień">60 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Fotelik dziecięcy</TableCell>
                    <TableCell data-label="Ikona"></TableCell>
                    <TableCell data-label="Do 3 godzin">30 PLN</TableCell>
                    <TableCell data-label="Cały dzień">30 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ sprzętu">Kask</TableCell>
                    <TableCell data-label="Ikona"></TableCell>
                    <TableCell data-label="Do 3 godzin">10 PLN</TableCell>
                    <TableCell data-label="Cały dzień">10 PLN</TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
    </Wrapper>
);

export default BikesPriceList;
