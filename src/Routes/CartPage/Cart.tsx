import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Cart.css';
import CartItem from '../../Components/CartItem';

interface CartProps {
  handleShowCart: () => void;
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  showCart: boolean;
  changeItemQuantity: (id: string, quantity: number) => void;
}

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

const Cart: React.FC<CartProps> = ({
  handleShowCart,
  cart,
  removeFromCart,
  showCart,
  changeItemQuantity,
}) => {
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const getCartTotal = (cartParam: CartItem[]) => {
      let sum = 0;
      cartParam.forEach((item) => {
        let itemPrice = item.quantity * item.price;
        sum += itemPrice;
      });
      return sum;
    };
    setCartTotal(getCartTotal(cart));
  }, [cart]);

  return (
    <div className="cart">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="cart-overlay"></div>
      <div className="cart-content">
        <div className="cart-header">
          <h3 className="cart-title">
            CART{' '}
            <span data-testid="cart-length" className="cart-count">
              ({cart.length})
            </span>
          </h3>
          <i
            onClick={handleShowCart}
            data-testid="cart-exit"
            className="fa-solid fa-x cart-x"
          ></i>
        </div>
        <div className="cart-items">
          {cart.length === 0 && (
            <div className="empty-cart-div">
              <p className="empty-cart">
                Your cart is empty <i className="fa-regular fa-face-smile"></i>
              </p>
            </div>
          )}
          {cart &&
            cart.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <CartItem
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    category={item.category}
                    quantity={item.quantity}
                    removeFromCart={removeFromCart}
                    id={item.id}
                    changeItemQuantity={changeItemQuantity}
                  ></CartItem>
                </div>
              );
            })}
        </div>
        <div className="cart-checkout">
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <p data-testid="subtotal">
              ${cartTotal}
              {cart.length !== 0 ? '.99' : '.00'}
            </p>
          </div>
          <button
            data-testid="continue-shopping"
            onClick={handleShowCart}
            className="cart-continue-btn"
          >
            CONTINUE SHOPPING
          </button>
          <button className="cart-checkout-btn">
            <a
              className="cart-checkout-words"
              href="https://github.com/mosierkyle"
            >
              CHECKOUT NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
