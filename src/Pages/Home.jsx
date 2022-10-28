import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';
import {beerArr} from '../consts/beerArray';
import {useDispatch} from "react-redux";
import {addItem} from "../redux/slices/cartSlice";

const Home = () => {
    const {setInputValue, onChangeInputValue, inputValue, onAddToFavourite} =
        React.useContext(AppContext);

    const dispatch = useDispatch()

    return (
        <div className="content">
            <div className="contentHeaderBottom">
                <div className="beerChoose">
                    <h1>{inputValue ? `Поиск по запросу: "${inputValue}"` : `Всё пиво`}</h1>
                </div>
                <div className="search">
                    <img src="/img/search.png" width={15} alt="SearchIcon"/>
                    <input
                        onChange={onChangeInputValue}
                        value={inputValue}
                        type="text"
                        placeholder="Поиск..."
                    />
                    {inputValue && (
                        <img onClick={() => setInputValue('')} src="/img/close.png" width={15} alt="close"/>
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
                            obj={obj}
                            onAddToCart={(obj) => dispatch(addItem(obj))}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
