import React from 'react';
import styles from './Card.module.scss';
import AppContext from '../../context';


const Card = ({imageURL, title, price, onFavourite, onAddToCart}) => {
  const {isAddedToFavorite} = React.useContext(AppContext);

  const onLike = () => {
    onFavourite({title, price, imageURL});
  };

  const onAdd = () => {
    onAddToCart({title, price, imageURL})
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <img
            onClick={onLike}
            src={isAddedToFavorite(title) ? '/img/likeCheckBox.png' : '/img/like.png'}
            alt="like"
            width={25}
            className={styles.like}
          />
          <img src={imageURL} height={150} alt="BeerImg"/>
          <div>
            <b>{title}</b>
          </div>
        </div>
        <div className={styles.cardPrice}>
          <span>
            Цена: <span className={styles.price}>{price}</span> руб.
          </span>
          <button className={styles.count} onClick={onAdd}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
