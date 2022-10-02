import React from 'react';
import styles from './Cart.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {closeCart} from "../../redux/slices/cartSlice";
import {CSSTransition} from "react-transition-group";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

const Cart = () => {
  const items = useSelector((state) => state.cartSlice.items)
  const visible = useSelector((state) => state.cartSlice.visible)
  const dispatch = useDispatch()

  return (
     <CSSTransition
        in={visible}
        timeout={1000}
        classNames="cart-arrival"
        mountOnEnter
        unmountOnExit
     >
       <div className={styles.overlay} onClick={() => dispatch(closeCart())}>
         <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
           <div className={styles.cartHeader}>
             <div className={styles.display}></div>
             <h2>Корзина</h2>
             <img src="/img/close.png" width={20} alt="close" onClick={() => dispatch(closeCart())}/>
           </div>
           {items.length === 0 ? (
              <EmptyCart/>
           ) : (
              <FullCart/>
           )}
         </div>
       </div>
     </CSSTransition>
  );
};

export default Cart;
