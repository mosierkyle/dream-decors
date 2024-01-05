import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import './Root.css';
import { Helmet } from 'react-helmet';
import Cart from '../CartPage/Cart';
import { useState } from 'react';

const Root = ({ cart, setCart }) => {
  const [showCart, setShowCart] = useState(false);

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
          <Link className="link" to="/">
            DREAM DECORS
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="link" to="living">
              LIVING
            </Link>
          </li>
          <li>
            <Link className="link" to="dining">
              DINING
            </Link>
          </li>
          <li>
            <Link className="link" to="bedroom">
              BEDROOM
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
          <li>
            {showCart ? (
              <i className="fa-solid fa-cart-shopping nav-cart"></i>
            ) : null}
            <Cart
              cart={cart}
              setCart={setCart}
              showCart={showCart}
              setShowCart={setShowCart}
            ></Cart>
          </li>
        </ul>
      </div>
      <div className="page">
        <Outlet />
      </div>
      <div className="footer">This is the footer Dream Decor</div>
    </div>
  );
};

export default Root;
