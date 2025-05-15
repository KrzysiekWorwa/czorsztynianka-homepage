import { Header, Wrapper } from "../../Offer/styled";
import { StyledTable, TableHeader, TableCell, TableRow } from "./styled";
import { ReactComponent as OneSideIcon } from "./1sideIcon.svg";
import { ReactComponent as TwoSideIcon } from "./2sidesIcon.svg";
import { ReactComponent as RoundIcon } from "./RoundIcon.svg";
import { ReactComponent as BikeIcon } from "./bikeIcon.svg";

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
            </tbody>
        </StyledTable>
    </Wrapper>
);

export default PriceList;
