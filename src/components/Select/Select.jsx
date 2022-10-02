import React from 'react';
import styles from './Select.module.scss';

const Select = () => {
  return (
    <div className={styles.block}>
      <label htmlFor="select">Сортировать по:</label>
      <select className={styles.select} name="select" id="select">
        <option value="">По популярности</option>
        <option value="">По названию</option>
        <option value="">По цене (сначала дороже)</option>
        <option value="">По цене (сначала дешевле)</option>
      </select>
    </div>
  );
};

export default Select;
