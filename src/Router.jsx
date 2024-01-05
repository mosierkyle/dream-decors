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

const Router = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root cart={cart} setCart={setCart} />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'shop', element: <ShopPage /> },
        { path: 'living', element: <Living /> },
        { path: 'dining', element: <Dining /> },
        { path: 'bedroom', element: <Bedroom /> },
        {
          path: '/item/:id',
          element: <ItemPage cart={cart} setCart={setCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
