import React from 'react';

const Header = () => {
	 return (
		 <div>
			  <header>
					<div className="headerLeft">
						 <img src="/img/logo.png" width={40} height={40} alt="BeerLogo"/>
						 <div>
							  <h3>Beer World</h3>
							  <p>Лучший пивной магазин</p>
						 </div>
					</div>
					<ul className="headerRight">
						 <li>
							  <img src="/img/cart.svg" width={30} height={30} alt="Cart"/>
							  <span>1025 руб.</span>
						 </li>
						 <li>
							  <img src="/img/user.svg" width={30} height={30} alt="User"/>
						 </li>
					</ul>
			  </header>
		 </div>
	 );
};

export default Header;