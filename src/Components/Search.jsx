import './Search.css';
import { Helmet } from 'react-helmet';
import allProducts from '../Data/allProducts';
import { Link } from 'react-router-dom';

const Search = ({
  searchResults,
  setSearchResults,
  search,
  setSearch,
  handleShowSearch,
}) => {
  const getSearchResults = (input) => {
    return allProducts.filter((product) => {
      let productName = product.name.toUpperCase();
      return productName.includes(input.toUpperCase());
    });
  };

  const handleSearch = (e) => {
    let newSearch = e.target.value;
    setSearch(newSearch);
    if (newSearch.length == 0) {
      setSearchResults([]);
    } else {
      setSearchResults(getSearchResults(e.target.value));
    }
  };

  return (
    <div className="search">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="overlay"></div>
      <div className="search-div">
        <div className="search-top-div">
          <div className="search-svg-div">
            <i className="fa-solid fa-magnifying-glass search-svg"></i>
          </div>
          <input
            className="search-input"
            type="text"
            value={search}
            placeholder={`Search`}
            onChange={handleSearch}
          />
          <div className="search-x-div">
            <i
              className="fa-solid fa-x search-x"
              onClick={handleShowSearch}
            ></i>
          </div>
        </div>
        <div className="search-results">
          {searchResults.length == 0 ? (
            <p className="search-no-results">No results found</p>
          ) : (
            <p className="search-no-results">Items({searchResults.length})</p>
          )}
          {searchResults.length !== 0 &&
            searchResults.map((result) => {
              return (
                <div key={result.price} className="search-result">
                  <Link
                    onClick={handleShowSearch}
                    className="search-result-name"
                    to={`/item/${result.id}`}
                  >
                    {result.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
