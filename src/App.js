import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import AnimeCard from './AnimeCard/AnimeCard';
import search from './assets/search.jpg';
import './App.scss';

function App() {
  const [searchResults, setSearchResults] = React.useState([]);
  const getSearchResults = (results) => {
    setSearchResults(results);
  }
 console.log('results ', searchResults);
  return (
    <div className='mt-10'>
      <SearchBar getSearchResults={getSearchResults} />
      {/* {searchResults && searchResults.length === 0 && 
        <div className='text-center mt-20'> 
          <p className='text-3xl'>Search for an anime</p>
          <img className='mx-auto mt-2 rounded-xl' src={search}/>
        </div>
      } */}
      <div className='flex flex-row flex-wrap justify-around mt-7 mx-10'>
        {searchResults && searchResults.map(anime => 
          <AnimeCard
            description={anime?.descriptions?.en}
            img={anime?.cover_image}
          />
        )}
      </div>
    </div>
  );
}

export default App;
