import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import './Root.css';
import { Helmet } from 'react-helmet';

const Root = () => {
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
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <Link className="link" to="cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">This is the footer Dream Decor</div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
