import React from 'react';
import styles from "./Cart.module.scss";
import {useDispatch} from "react-redux";
import {closeCart} from "../../redux/slices/cartSlice";

const EmptyCart = () => {

  const dispatch = useDispatch()

  return (
     <div className={styles.emptyContent}>
       <div></div>
       <div className={styles.image}>
         <img src="/img/emptyCart.png" width={200} alt="emptyCart"/>
         <p>
           Вашей корзине пусто! Добавьте хотябы один товар в корзину, чтобы сделать заказ.
         </p>
       </div>
       <button onClick={() => dispatch(closeCart())} className={styles.greenBtn}>
         <img src="/img/arrowRight.png" width={18} alt="arrow"/>
         Вернуться назад
       </button>
     </div>
  );
};

export default EmptyCart;