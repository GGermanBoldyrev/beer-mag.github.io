import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
  const catArray = ['Всё', 'Фруктовое', 'Светлое', 'Тёмное'];
  const [active, setActive] = React.useState(0);

  return (
    <ul className={styles.list}>
      {catArray.map((category, i) => (
        <li
          key={category}
          className={active === i ? styles.active : styles.inactive}
          onClick={() => setActive(i)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
