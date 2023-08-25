import PropTypes from 'prop-types';
import { TransactionTable, Transactions } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <Transactions>
        {items.map(({id, type, amount, currency }) => {
            return  <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        })}
      </Transactions>
    </TransactionTable>
  );
};


