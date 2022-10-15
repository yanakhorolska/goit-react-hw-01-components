import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableBody,
  TableBodyItem,
  TableBodyItems,
  TableHeadItems,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadItems>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableHeadItems>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableBodyItems key={item.id}>
            <TableBodyItem>{item.type}</TableBodyItem>
            <TableBodyItem>{item.amount}</TableBodyItem>
            <TableBodyItem>{item.currency}</TableBodyItem>
          </TableBodyItems>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
