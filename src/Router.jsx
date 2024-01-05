import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root/Root';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import HomePage from './Routes/HomePage/HomePage';
import ShopPage from './Routes/ShopPages/ShopPage';
import CartPage from './Routes/CartPage/CartPage';
import Living from './Routes/ShopPages/Living/Living';
import Dining from './Routes/ShopPages/Dining/Dining';
import Bedroom from './Routes/ShopPages/Bedroom/Bedroom';
import ItemPage from './Routes/CartPage/ItemPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'shop', element: <ShopPage /> },
        { path: 'cart', element: <CartPage /> },
        { path: 'living', element: <Living /> },
        { path: 'dining', element: <Dining /> },
        { path: 'bedroom', element: <Bedroom /> },
        { path: '/item/:id', element: <ItemPage back={'bedroom'} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
