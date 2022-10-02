import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import AppContext from "./context"

function App() {
    const [inputValue, setInputValue] = useState('')
    const [favourites, setFavourites] = useState([])


    /* На добавление в лайкнутое */
    const onAddToFavourite = (obj) => {
        if (favourites.find(item => item.title === obj.title)) {
            setFavourites((prev) => prev.filter(item => item.title !== obj.title))
        } else {
            setFavourites(prevState => [...prevState, obj])
        }
    }

    /* Поиск по товарам */
    const onChangeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const isAddedToFavorite = (title) => {
        return favourites.some((item) => item.title === title)
    }

    return (
        <AppContext.Provider value={{
            favourites, inputValue,
            onChangeInputValue, setInputValue, onAddToFavourite, isAddedToFavorite
        }}>
            <div className="wrapper">
                <Cart/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
