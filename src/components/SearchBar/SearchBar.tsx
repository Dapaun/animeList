import React from 'react';
import Button, { buttonTypeValue } from '../Button/Button';
import './SearchBar.scss';

const SearchBar = (props: any) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [displayClearButton, setDisplayClearButton] = React.useState(false);

  const handleSearchTermChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const baseUrl = 'https://api.aniapi.com/v1/anime?title=';

  const handleClickSearch = () => {
      fetch(baseUrl + encodeURIComponent(searchTerm), {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        // body: JSON.stringify(body)
      })
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
      <Button buttonType = { buttonTypeValue.search } handleCLick = {handleClickSearch}/>
      {displayClearButton && 
        <Button buttonType = { buttonTypeValue.clear } handleCLick = {handleClickClear}/>
      }
    </div>
  );
};

export default SearchBar;