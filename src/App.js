import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

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
						 <Card/>
						 <Card/>
						 <Card/>
						 <Card/>
					</div>
			  </div>
		 </div>
	 );
}

export default App;
