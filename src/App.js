import React from 'react';
import HomePage from './pages/HomePage';
import SearchBar from './components/SearchBar/SearchBar';
import AnimeCard from './AnimeCard/AnimeCard';

import { Routes, Route, } from "react-router-dom";
import './App.scss';

function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const getSearchResults = (results) => {
    setSearchResults(results);
  }
  const HomePage = 
    <>
      <SearchBar getSearchResults={getSearchResults} />
      <div className='flex flex-row flex-wrap justify-around mt-7 mx-10'>
        {searchResults && searchResults.map((anime) =>
          <AnimeCard
            description={anime?.descriptions?.en}
            img={anime?.cover_image}
          />
        )}
      </div>
    </>;

  return (
    <div className='mt-10'>
      <Routes>
        <Route path="/" element={HomePage}/>

      </Routes>
    </div>
  );
}

export default App;
