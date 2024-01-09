import './Root.css';
import Cart from '../CartPage/Cart';
import Search from '../../Components/Search';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';

const Root = ({ cart, addToCart, removeFromCart, changeItemQuantity }) => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const handleShowSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
    setSearchResults([]);
    setSearch('');
  };

  const handleShowCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <div className="content">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="header">
        <div className="logo">
          <Link data-testid="logo" className="link" to="/">
            DREAM DECORS
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link data-testid="living" className="link" to="living">
              LIVING
            </Link>
          </li>
          <li>
            <Link data-testid="dining" className="link" to="dining">
              DINING
            </Link>
          </li>
          <li>
            <Link data-testid="bedroom" className="link" to="bedroom">
              BEDROOM
            </Link>
          </li>
          <li>
            <i
              data-testid="search"
              className="fa-solid fa-magnifying-glass search-icon"
              onClick={handleShowSearch}
            ></i>
            {showSearch && (
              <Search
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                search={search}
                setSearch={setSearch}
                handleShowSearch={handleShowSearch}
              ></Search>
            )}
          </li>
          <li>
            {/* {showCart ? ( */}
            <i
              data-testid="cart"
              className="fa-solid fa-cart-shopping nav-cart"
              onClick={handleShowCart}
            ></i>
            {/* ) : null} */}
            {showCart && (
              <Cart
                cart={cart}
                showCart={showCart}
                setShowCart={setShowCart}
                removeFromCart={removeFromCart}
                changeItemQuantity={changeItemQuantity}
                handleShowCart={handleShowCart}
              ></Cart>
            )}
          </li>
        </ul>
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
