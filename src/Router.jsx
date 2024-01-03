import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root/Root';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import HomePage from './Routes/HomePage/HomePage';
import ShopPage from './Routes/ShopPage/ShopPage';
import CartPage from './Routes/CartPage/CartPage';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
