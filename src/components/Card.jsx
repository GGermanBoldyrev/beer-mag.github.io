import React from 'react';

const Card = () => {
	 return (
		 <div>
			  <div className="card">
					<img src="/img/like.png" alt="like" width={25} className="like"/>
					<img src="/img/1.jpg" width={150} alt="BeerImg"/>
					<p>Delirium Red</p>
					<div className="cardPrice">
						 <span>Цена: 199 руб.</span>
						 <img src="/img/add.png" width={22} alt="add"/>
					</div>
			  </div>
		 </div>
	 );
};

export default Card;