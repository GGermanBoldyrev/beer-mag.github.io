import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
	 return (
		 <div>
			  <header>
					<div className={styles.headerLeft}>
						 <img src="/img/logo.png" width={50} height={50} alt="BeerLogo"/>
						 <div>
							  <h2>Beer World</h2>
							  <p>Лучший пивной магазин</p>
						 </div>
					</div>
					<ul className={styles.headerRight}>
						 <li>
							  <img src="/img/cart.png" height={25} alt="Cart"/>
							  <span>1025 руб.</span>
						 </li>
						 <li>
							  <img src="/img/user.svg" height={30} alt="User"/>
						 </li>
					</ul>
			  </header>
		 </div>
	 );
};

export default Header;