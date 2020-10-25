import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);
        const names = data.map(country => country.name)
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Country loaded{countries.length}</h1>
      <h3>Country Added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country =><Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        
        }
      </ul>
      
    </div>
  );
}

export default App;
