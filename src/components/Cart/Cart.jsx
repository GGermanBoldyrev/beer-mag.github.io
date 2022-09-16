import React from 'react';
import styles from './Cart.module.scss';
import AppContext from '../../context';

const Cart = () => {
  const { totalPrice, cartItems, onRemove, onOpenCloseCart } = React.useContext(AppContext);

  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <h2>Корзина</h2>
            <img src="/img/close.png" alt="close" onClick={onOpenCloseCart} />
          </div>
          {cartItems.length === 0 ? (
            <div className={styles.emptyContent}>
              <div></div>
              <div className={styles.image}>
                <img src="/img/emptyCart.png" width={200} alt="emptyCart" />
                <p>
                  Вашей корзине пусто! Добавьте хотябы один товар в корзину, чтобы сделать заказ.
                </p>
              </div>
              <button onClick={onOpenCloseCart} className={styles.greenBtn}>
                <img src="/img/arrowRight.png" width={18} alt="arrow" />
                Вернуться назад
              </button>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.items}>
                {cartItems.map((item, title) => (
                  <div className={styles.cartItem} key={title}>
                    <img src={item.imageURL} width={100} alt="Beer" />
                    <div>
                      <p>{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <div>
                      <img onClick={() => onRemove(item.id)} src="/img/remove.png" alt="Remove" />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cartCount}>
                <ul>
                  <li>
                    <span>Сумма заказа:</span>
                    <div></div>
                    <b>{totalPrice} руб.</b>
                  </li>
                  <li>
                    <span>Доставка:</span>
                    <div></div>
                    <b>250 руб.</b>
                  </li>
                  <li>
                    <span style={{fontWeight: 'bold'}}>Итого:</span>
                    <div></div>
                    <b style={{color: 'red'}}>{totalPrice + 250} руб.</b>
                  </li>
                </ul>
                <button className={styles.greenBtn}>
                  Оформить заказ <img src="/img/arrowRight.png" width={18} alt="arrow" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
