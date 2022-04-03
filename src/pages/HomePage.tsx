import React from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const getSearchResults = (results: any) => {
    setSearchResults(results);
  }
  return (
    <>
      <SearchBar getSearchResults={getSearchResults} />
      <div className='flex flex-row flex-wrap justify-around mt-7 mx-10'>
        {searchResults && searchResults.map((anime: any) =>
          <AnimeCard
            description={anime?.descriptions?.en}
            img={anime?.cover_image}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;