import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  @media (max-width: 768px) {
    border: 0;

    thead {
      display: none;
    }

    tbody {
      display: block;
    }
  }
`;

export const TableHeader = styled.th`
  padding: 16px;
  background-color: #f0f0f0;
  font-size: 1.1rem;
`;

export const TableRow = styled.tr`
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const TableCell = styled.td`
  padding: 16px;

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    position: relative;
    padding-left: 50%;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 16px;
      width: 45%;
      text-align: left;
      font-weight: bold;
      white-space: nowrap;
    }
  }
`;
