import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

const Favourites = () => {
  const { favourites, onAddToFavourite, onAddToCart } = React.useContext(AppContext);

  return (
    <div className="content">
      <div className="contentHeader">
        <h1>Избранное</h1>
      </div>
      <div className="cardContainer">
        {favourites.map((obj, title) => (
          <Card
            key={title}
            title={obj.title}
            price={obj.price}
            imageURL={obj.imageURL}
            onFavourite={(obj) => onAddToFavourite(obj)}
            onPlus={(item) => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
