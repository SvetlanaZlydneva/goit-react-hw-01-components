import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{ backgroundColor: `${generateColor()}` }}
          className={styles.item}
          key={id}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}&#37;</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

const generateColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};

export default Statistics;
