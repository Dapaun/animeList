import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearchTermChange = (e: any) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="text-center">
      <input 
        className="border-2 border-b-neutral-400"
        name="searchTermInput"
        value={searchTerm} 
        onChange={handleSearchTermChange}
      />
      <button 
        className="searchButton">
        Search
        <AiOutlineSearch className="inline ml-1 scale-125"/>
      </button>
    </div>
  );
};

export default SearchBar;