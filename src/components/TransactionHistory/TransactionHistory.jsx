import PropTypes, { arrayOf } from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';
import {TransactionItem} from '../TransactionItem/TransactionItem'

export const TransactionHistory = ({items}) => {
  return <table className={css.transactionHistory}>
  <thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
  </thead>
  <tbody>
  {items.map(({id, type, amount, currency}) => (
    <TransactionItem
      key={id}
      type={type}
      amount={amount}
      currency={currency}
    />
  ))

  }
  </tbody>
</table>
}
TransactionHistory.propTypes = {
  items: arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  )
 }

