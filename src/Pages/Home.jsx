import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

const Home = () => {
  const { beerArr, setInputValue, onChangeInputValue, inputValue, onAddToFavourite, onAddToCart } =
    React.useContext(AppContext);

  return (
    <div className="content">
      <div className="contentHeader">
        <h1>{inputValue ? `Поиск по запросу: "${inputValue}"` : `Всё пиво`}</h1>
        <div className="search">
          <img src="/img/search.png" width={15} alt="SearchIcon" />
          <input
            onChange={onChangeInputValue}
            value={inputValue}
            type="text"
            placeholder="Поиск..."
          />
          {inputValue && (
            <img onClick={() => setInputValue('')} src="/img/close.png" width={15} alt="close" />
          )}
        </div>
      </div>
      <div className="cardContainer">
        {beerArr
          .filter((obj) => obj.title.toLowerCase().includes(inputValue.toLowerCase()))
          .map((obj, title) => (
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

export default Home;
