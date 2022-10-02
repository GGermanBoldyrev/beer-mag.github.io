import React from 'react';
import styles from "./Cart.module.scss";
import {clearItems, removeItem} from "../../redux/slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const FullCart = () => {

  const items = useSelector((state) => state.cartSlice.items)
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice)
  const dispatch = useDispatch()

  return (
     <div className={styles.content}>
       <div className={styles.items}>
         {items.map((item, title) => (
            <div className={styles.cartItem} key={title}>
              <img src={item.imageURL} width={100} alt="Beer"/>
              <div>
                <p>{item.title}</p>
                <b>{item.price} руб.</b>
              </div>
              <div>
                <img onClick={() => dispatch(removeItem())} src="/img/remove.png" alt="Remove"/>
              </div>
            </div>
         ))}
       </div>
       <div className={styles.cartCount}>
         <ul>
           <li
              className={styles.clear}
              onClick={() => dispatch(clearItems())}
           >
             Отчистить корзину
           </li>
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
           Оформить заказ <img src="/img/arrowRight.png" width={18} alt="arrow"/>
         </button>
       </div>
     </div>
  );
};

export default FullCart;