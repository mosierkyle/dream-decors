import { Helmet } from 'react-helmet';
import './Cart.css';
import CartItem from '../../Components/CartItem';
import { useEffect, useState } from 'react';

const Cart = ({
  setShowCart,
  cart,
  removeFromCart,
  showCart,
  changeItemQuantity,
}) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    console.log('this went');
    const getCartTotal = (cartParam) => {
      let sum = 0;
      cartParam.forEach((item) => {
        let itemPrice = item.quantity * item.price;
        sum += itemPrice;
      });
      return sum;
    };
    setCartTotal(getCartTotal(cart));
  }, [cart]);

  const onCartClick = () => {
    showCart ? setShowCart(false) : setShowCart(true);
    console.log(cart);
    return;
  };

  if (showCart) {
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
              CART <span className="cart-count">({cart.length})</span>
            </h3>
            <i onClick={onCartClick} className="fa-solid fa-x cart-x"></i>
          </div>
          <div className="cart-items">
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
                      setCartTotal={setCartTotal}
                      cartTotal={cartTotal}
                    ></CartItem>
                  </div>
                );
              })}
          </div>
          <div className="cart-checkout">
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <p>
                ${cartTotal}
                {cart.length !== 0 ? '.99' : '.00'}
              </p>
            </div>
            <button onClick={onCartClick} className="cart-continue-btn">
              CONTINUE SHOPPING
            </button>
            <button className="cart-checkout-btn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <i
        onClick={setShowCart}
        className="fa-solid fa-cart-shopping nav-cart"
      ></i>
    );
  }
};

export default Cart;
