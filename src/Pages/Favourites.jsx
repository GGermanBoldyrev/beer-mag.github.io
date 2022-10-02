import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

const Favourites = () => {
    const {favourites, onAddToFavourite} = React.useContext(AppContext);

    return (
        <div className="content">
            <div className="contentHeader">
                <h1>Избранное</h1>
            </div>

            {favourites.length === 0 ? (
                <div className="favContent">
                    <img src="/img/notFav.png" width={100} alt="not favorite"/>
                    <p>
                        Вы пока не добавили ни одного товара в избранное!
                    </p>
                </div>
            ) : (
                <div className="cardContainer">
                    {favourites.map((obj, title) => (
                        <Card
                            key={title}
                            title={obj.title}
                            price={obj.price}
                            imageURL={obj.imageURL}
                            onFavourite={(obj) => onAddToFavourite(obj)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favourites;
