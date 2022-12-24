import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {StatisticsItem} from '../StatisticsItem/StatisticsItem'

export const Statistics = ({title, stats}) => {
    return <section className={css.statistics}>
    {title && (<h2>{title}</h2>)} 
    <ul className={css.statList}>
      {stats.map(({label, percentage, id}) => (
        <StatisticsItem
          key={id}
          label={label}
          percentage={percentage}
        />
      ))}
    </ul>
  </section>
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
  id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )};

