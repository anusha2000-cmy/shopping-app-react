import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App(){
    const [items, setItems] = useState([]);
    let [query,setQuery] = useState("");
    const [cartItems, setCartItems] = useState([]);

    const setItemsList=(items) => {
      setItems(items);
    };

    const filteredItems=items.filter(
      item => {
        return (
          item.name.toLowerCase().includes(query.toLocaleLowerCase())
        )
      }
    );

    const addItemToCart = (item) => {
      const alreadyItems = cartItems
                          .find(item1 => item1.product.id === item.id);
      if (alreadyItems) {
          const latestCartUpdate = cartItems.map(item1 =>
              item1.product.id === item.id ? { 
              ...item1, quantity: item1.quantity + 1 } 
              : item1
          );
          setCartItems(latestCartUpdate);
      } else {
          setCartItems([...cartItems, {product: item, quantity: 1}]);
      }
  };

  const totalAmountCalculationFunction = () => {
    return cartItems
        .reduce((total, item) => 
                    total + item.product.price * item.quantity, 0);
};

const deleteItemFromCartFunction = (item) => {
  const updatedCart = cartItems
                      .filter(item1 => item1.product.id !== item.id);
  setCartItems(updatedCart);
};

  return (
       <BrowserRouter>
       <Navigationbar query={query} onQueryChange={myQuery => setQuery(myQuery)}/>
              <Routes>
                    <Route path="/" element={<Home items={filteredItems} setItemsList={setItemsList} addItemToCart={addItemToCart}/>}/>
                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}
                        totalAmountCalculationFunction={totalAmountCalculationFunction}
                        deleteItemFromCartFunction={deleteItemFromCartFunction}/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>  
                    <Route path="/about" element={<About/>}/> 
                    <Route path="/contact" element={<Contact/>}/>
              </Routes>             
       </BrowserRouter>     
    );
}

export default App;
