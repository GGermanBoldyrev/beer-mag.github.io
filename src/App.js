import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Cart from "./components/Cart/Cart";

const arr = [
	{
		title: "Delirium Red",
		price: 790,
		imageURL: "/img/1.jpg"
	},
	{
		title: "Rodenbach Alexander",
		price: 340,
		imageURL: "/img/2.jpg"
	},
	{
		title: "Trappistes Rochefort 6",
		price: 250,
		imageURL: "/img/3.jpg"
	},
	{
		title: "Barbe Ruby",
		price: 390,
		imageURL: "/img/4.jpg"
	},
	{
		title: "Monk`s Café Flemish Sour Ale",
		price: 205,
		imageURL: "/img/5.jpg"
	},
	{
		title: "Oude Kriek Schar-Elle",
		price: 1755,
		imageURL: "/img/6.jpg"
	},
	{
		title: "Quadroletta",
		price: 385,
		imageURL: "/img/7.jpg"
	},
	{
		title: "Tre Fontane Tripel",
		price: 810,
		imageURL: "/img/8.jpg"
	}
]

function App() {
	return (
		<div className="wrapper">
			<Cart/>
			<Header/>
			<div className="content">
				<div className="contentHeader">
					<h1>Всё пиво</h1>
					<div className="search">
						<img src="/img/search.png" width={15} alt="SearchIcon"/>
						<input type="text" placeholder="Поиск..."/>
					</div>
				</div>
				<div className="cardContainer">
					{arr.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							imageURL={obj.imageURL}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
