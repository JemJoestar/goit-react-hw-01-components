import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  th {
    border: 1px solid lightgray;
    padding: 8px;
    text-align: center;
    background-color: #29a6e1;
    color: #ffffff;
    text-transform: uppercase;
  }
`;

export const Transactions = styled.tbody`
  td {
    border: 1px solid lightgray;
    padding: 8px;
     text-align: center;
    background-color: #ffffff;
  }
  
  tr:nth-of-type(even){
    background-color: #ebebeb;
    td{
        background-color: inherit;
    }
  }

`;
