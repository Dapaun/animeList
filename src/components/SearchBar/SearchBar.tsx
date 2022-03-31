import React from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import './SearchBar.scss';

const SearchBar = (props: any) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [displayClearButton, setDisplayClearButton] = React.useState(false);

  const handleSearchTermChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const baseUrl = 'https://api.aniapi.com/v1/anime?title=';

  const handleClickSearch = () => {
      fetch(baseUrl + encodeURIComponent(searchTerm))
      .then(response => response.json())
      .then(animeList => 
        {
          setDisplayClearButton(true);
          props.getSearchResults(animeList?.data?.documents)
        });
  }

  const handleClickClear = () => {
    setDisplayClearButton(false);
    props.getSearchResults([]);
  }

  return (
    <div className="text-center">
      <input 
        className="searchInput"
        name="searchTermInput"
        value={searchTerm} 
        onChange={handleSearchTermChange}
        placeholder="Search an anime!"
      />
      <button 
        className="searchButton"
        onClick={handleClickSearch}
      >
        Search
        <AiOutlineSearch className="inline ml-1 scale-125"/>
      </button>
      {displayClearButton &&
        <button 
          className="clearButton"
          onClick={handleClickClear}
        >
          Clear
          <AiOutlineCloseCircle className="inline ml-1 scale-125"/>
        </button>
      }
    </div>
  );
};

export default SearchBar;