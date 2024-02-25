import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import './index.css'

//database
import products from "./db/data";

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const [query, setQuery] = useState("");


  //------input filter-----

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------Radio filter-----

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  };

// -------Button Filter------

const handleButtonClick = (event) => {
  setSelectedCategory(event.target.velue);
};

function filteredData(products,selected,query) {

  let filteredProducts = products;

  //filtering input items
  if (query) {
    filteredProducts = filteredItems;
  }

  //Filter Selected
  if(selected) {
     filteredProducts = filteredProducts.filter(
      ({ category, color, title, newPrice, company }) =>
        category === selected ||
        color === selected ||
        title === selected ||
        newPrice === selected ||
        company === selected
    );
  }

     return filteredProducts.map(
       ({ img, title, star, reviews, prevPrice, newPrice }) => (
         <Card
           key={Math.random()}
           img={img}
           title={title}
           star={star}
           reviews={reviews}
           prevPrice={prevPrice}
           newPrice={newPrice}
         />
       )
     ); 
}

const result = filteredData(products,selectedCategory,query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleButtonClick={handleButtonClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
