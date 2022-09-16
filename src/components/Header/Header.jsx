import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import AppContext from '../../context';

const Header = () => {
  const { totalPrice, onOpenCloseCart } = React.useContext(AppContext);

  return (
    <div>
      <header>
        <Link to="/">
          <div className={styles.headerLeft}>
            <img src="/img/logo.png" width={60} height={60} alt="BeerLogo" />
            <div>
              <h2>Beer World</h2>
              <p>Лучший пивной магазин</p>
            </div>
          </div>
        </Link>
        <ul className={styles.headerRight}>
          <li onClick={onOpenCloseCart} className={styles.cart}>
            <img src="/img/cart.png" height={25} alt="Cart" />
            <span>{totalPrice} руб.</span>
          </li>
          <Link to="/favourites">
            <li>
              <img src="/img/bookmark.png" height={30} alt="Bookmark" />
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
