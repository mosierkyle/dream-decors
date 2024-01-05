import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Root from './Routes/Root/Root';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import HomePage from './Routes/HomePage/HomePage';
import ShopPage from './Routes/ShopPages/ShopPage';
import Living from './Routes/ShopPages/Living/Living';
import Dining from './Routes/ShopPages/Dining/Dining';
import Bedroom from './Routes/ShopPages/Bedroom/Bedroom';
import ItemPage from './Routes/CartPage/ItemPage';
import getData from './Components/getData';

const Router = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, num) => {
    let newItem = getData(id);
    for (let i = 0; i < num; i++) {
      setCart([...setCart, newItem]);
    }
  };

  const removeFromCart = () => {
    let removeItem = getData(id);
    const index = array.indexOf(removeItem);
    setCart(cart.splice(index, 1));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'shop', element: <ShopPage /> },
        { path: 'living', element: <Living /> },
        { path: 'dining', element: <Dining /> },
        { path: 'bedroom', element: <Bedroom /> },
        {
          path: '/item/:id',
          element: (
            <ItemPage
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
