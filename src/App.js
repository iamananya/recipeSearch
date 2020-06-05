import React, { useEffect, useState } from 'react';
import Recipie from './Recipie';

import './App.css';

const App = () => {
  const APP_ID = 'c9c8992a';
  const APP_KEY = "0cb9016a6a4bdd08b5a9cd5606c74251";


  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getReciepes();

  }, [query]);
  const getReciepes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return (
    <div className="App">
      <h2 className="head">RECIPIE SEARCH</h2>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >
          Search
        </button>
      </form>
      <div className="recipies">
        {recipies.map(recipie => (
          <Recipie
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            calories={recipie.recipe.calories}
            image={recipie.recipe.image}
            ingredients={recipie.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
