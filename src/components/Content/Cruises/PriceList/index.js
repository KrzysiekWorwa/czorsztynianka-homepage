import { Header, Wrapper } from "../../Offer/styled";
import { StyledTable, TableHeader, TableCell, TableRow } from "./styled";

const PriceList = () => (
    <Wrapper>
        <Header>Cennik</Header>
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
                    <TableCell data-label="Ikona">➡️</TableCell>
                    <TableCell data-label="Bilet normalny">17 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">14 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Rejs w dwie strony</TableCell>
                    <TableCell data-label="Ikona">↔️</TableCell>
                    <TableCell data-label="Bilet normalny">34 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">28 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Rejs widokowy dookoła jeziora</TableCell>
                    <TableCell data-label="Ikona">🔄️</TableCell>
                    <TableCell data-label="Bilet normalny">35 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">28 PLN</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell data-label="Typ rejsu">Pasażer z rowerem</TableCell>
                    <TableCell data-label="Ikona">🚵</TableCell>
                    <TableCell data-label="Bilet normalny">27 PLN</TableCell>
                    <TableCell data-label="Bilet ulgowy">Dzieci do lat 4 <strong>bezpłatnie</strong></TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
    </Wrapper>
);

export default PriceList;
