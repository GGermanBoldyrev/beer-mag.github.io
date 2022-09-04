import React from 'react';
import styles from './Cart.module.scss'

const Cart = () => {
	 return (
		 <div>
			  <div style={{display: "none"}} className={styles.overlay}>
					<div className={styles.cart}>
						 <div className={styles.cartHeader}>
							  <h2>Корзина</h2>
							  <img src="/img/close.png" alt="close"/>
						 </div>


						 <div className={styles.items}>
							  <div className={styles.cartItem}>
									<img src="/img/1.jpg" width={100} alt="Beer"/>
									<div>
										 <p>Delirium Red</p>
										 <b>199 руб.</b>
									</div>
									<div>
										 <img src="/img/remove.png" alt="Remove"/>
									</div>
							  </div>
						 </div>

						 <div className={styles.cartCount}>
							  <ul>
									<li>
										 <span>Итого:</span>
										 <div></div>
										 <b>2012 руб.</b>
									</li>
									<li>
										 <span>Налог 5%:</span>
										 <div></div>
										 <b> 401 руб.</b>
									</li>
							  </ul>
							  <button className={styles.greenBtn} >Оформить заказ <img src="/img/arrowRight.png" width={18} alt="arrow"/> </button>
						 </div>
					</div>
			  </div>
		 </div>
	 );
};

export default Cart;