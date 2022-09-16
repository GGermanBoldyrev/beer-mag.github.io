import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./Pages/Home"
import Favourites from "./Pages/Favourites";
import {useEffect, useState} from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import AppContext from "./context"

function App() {

	const [inputValue, setInputValue] = useState('')
	const [cartItems, setCartItems] = useState([])
	const [favourites, setFavourites] = useState([])
	const [cartOpened, setCartOpened] = useState(false)

	const beerArr = [
		{
			"title": "Delirium Red",
			"price": 790,
			"imageURL": "/img/1.jpg"
		},
		{
			"title": "Rodenbach Alexander",
			"price": 340,
			"imageURL": "/img/2.jpg"
		},
		{
			"title": "Trappistes Rochefort 6",
			"price": 250,
			"imageURL": "/img/3.jpg"
		},
		{
			"title": "Barbe Ruby",
			"price": 390,
			"imageURL": "/img/4.jpg"
		},
		{
			"title": "Monk`s Café Flemish Sour Ale",
			"price": 205,
			"imageURL": "/img/5.jpg"
		},
		{
			"title": "Oude Kriek Schar-Elle",
			"price": 1755,
			"imageURL": "/img/6.jpg"
		}, {
			"title": "Quadroletta",
			"price": 385,
			"imageURL": "/img/7.jpg"
		},
		{
			"title": "Tre Fontane Tripel",
			"price": 810,
			"imageURL": "/img/8.jpg"
		},
		{
			"title": "Oud Bruin Oak Leaf",
			"price": 540,
			"imageURL": "/img/9.jpg"
		},
		{
			"title": "Omega",
			"price": 355,
			"imageURL": "/img/10.jpg"
		}, {
			"title": "Lynchburg Natt",
			"price": 650,
			"imageURL": "/img/11.jpg"
		},
		{
			"title": "Monks` Reserve Ale",
			"price": 395,
			"imageURL": "/img/12.jpg"
		}
	]

	/* Гет запрос на отображение товара */
	useEffect(() => {
		axios.get('https://63162a425b85ba9b11f16e04.mockapi.io/BeerItems').then((res) => {
			setCartItems(res.data)
		})
	}, [])

	/* Пост запрос на добавление в корзину */
	const onAddToCart = (item) => {
		axios.post('https://63162a425b85ba9b11f16e04.mockapi.io/BeerItems', item).then((res) => {
			setCartItems(prevState => [...prevState, res.data])
		})
	}

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

	/* Запрос на удаление товара из корзины */
	const onRemove = (id) => {
		axios.delete(`https://63162a425b85ba9b11f16e04.mockapi.io/BeerItems/${id}`).then(() =>
			setCartItems(prevState => prevState.filter(item => item.id !== id)))
	}

	/* Подсчет стоимости*/
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const sumArray = cartItems.map((item) => item.price);
		setTotalPrice(sumArray.reduce((a, b) => a + b, 0));
	}, [cartItems]);

	/* Открытие Корзины*/
	const onOpenCloseCart = () => {
		setCartOpened(!cartOpened);
	}

  const isAddedToFavorite = (title) => {
    return favourites.some((item) => item.title === title)
  }

	return (
		<AppContext.Provider value={{
			favourites, totalPrice, beerArr, inputValue,
			onChangeInputValue, onOpenCloseCart, setInputValue, onAddToFavourite, onAddToCart,
			cartItems, onRemove, isAddedToFavorite
		}}>
			<div className="wrapper">
				{cartOpened && <Cart/>}
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
