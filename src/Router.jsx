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

  const addToCart = (id, q) => {
    let inCart = cart.find((item) => item.id === id);
    let newItem = getData(id);
    if (!inCart) {
      setCart([...cart, { ...newItem, quantity: q }]);
    } else {
      let newQ = q + inCart.quantity;
      let index = cart.indexOf(inCart);
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart.splice(index, 1, { ...newItem, quantity: newQ });
        return newCart;
      });
    }
    return;
  };

  const removeFromCart = (id) => {
    let removeItem = cart.find((item) => item.id === id);
    const index = cart.indexOf(removeItem);
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
    console.log(cart);
  };

  const changeItemQuantity = (id, q) => {
    let inCart = cart.find((item) => item.id === id);
    let index = cart.indexOf(inCart);
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1, { ...inCart, quantity: q });
      return newCart;
    });
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Root
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          changeItemQuantity={changeItemQuantity}
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
          element: <ItemPage cart={cart} addToCart={addToCart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
