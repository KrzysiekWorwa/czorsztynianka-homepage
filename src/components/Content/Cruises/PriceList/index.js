import { Header, Wrapper } from "../../Offer/styled";
import { StyledTable, TableHeader, TableCell, TableRow } from "./styled";

const PriceList = () => (
    <Wrapper>
        <Header>
            Cennik
        </Header>
        <StyledTable>
            <thead>
                <TableRow>
                    <TableHeader></TableHeader>
                    <TableHeader></TableHeader>
                    <TableHeader>
                        Bilet normalny
                    </TableHeader>
                    <TableHeader>
                        Bilet ulgowy do lat 10
                    </TableHeader>
                </TableRow>
            </thead>
            <tbody>
                <TableRow>
                    <TableCell>
                        Rejs w jedną stronę
                    </TableCell>
                    <TableCell>
                        ➡️
                    </TableCell>
                    <TableCell>
                        17 PLN
                    </TableCell>
                    <TableCell>
                        14 PLN
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Rejs w dwie strony
                    </TableCell>
                    <TableCell>
                        ↔️
                    </TableCell>
                    <TableCell>
                        34 PLN
                    </TableCell>
                    <TableCell>
                        28 PLN
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Rejs widokowy dookoła jeziora
                    </TableCell>
                    <TableCell>
                        🔄️
                    </TableCell>
                    <TableCell>
                        35 PLN
                    </TableCell>
                    <TableCell>
                        28 PLN
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Pasażer z rowerem
                    </TableCell>
                    <TableCell>
                        🚵
                    </TableCell>
                    <TableCell>
                        27 PLN
                    </TableCell>
                    <TableCell>
                        Dzieci do lat 4 <strong>bezpłatnie</strong>
                    </TableCell>
                </TableRow>
            </tbody>
        </StyledTable>
    </Wrapper>
);

export default PriceList;