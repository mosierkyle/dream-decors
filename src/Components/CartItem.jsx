import { useState } from 'react';
import { Helmet } from 'react-helmet';
import './CartItem.css';

const CartItem = ({
  name,
  image,
  price,
  category,
  quantity,
  removeFromCart,
  changeItemQuantity,
  id,
  setCartTotal,
  cartTotal,
}) => {
  const [q, setQ] = useState(quantity);
  const [p, setP] = useState(quantity * price);

  function quantityChange(e) {
    if (e <= 1) {
      removeFromCart(id);
      return;
    }
    let newP = e.target.value * price;
    setP(newP);
    setQ(e.target.value);
  }

  function quanityIncrease() {
    let newQ = q + 1;
    let newP = newQ * price;
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }

  function quanityDecrease() {
    let newQ = q - 1;
    let newP = newQ * price;
    if (q <= 1) {
      removeFromCart(id);
      return;
    }
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <div className="cart-item-img-div">
        <img className="cart-item-img" src={image} alt="item-image" />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-category">Category: {category}</p>
        <div className="cart-item-quantity">
          <button className="cart-q-btn" onClick={quanityDecrease}>
            -
          </button>
          <input
            className="cart-q-input"
            type="text"
            value={q}
            onChange={quantityChange}
          />
          <button className="cart-q-btn" onClick={quanityIncrease}>
            +
          </button>
        </div>
      </div>
      <div className="cart-item-price">
        <p className="cart-item-total">${p}.99</p>
      </div>
      <i
        onClick={() => removeFromCart(id)}
        className="fa-solid fa-trash cart-item-delete-btn"
      ></i>
    </>
  );
};

export default CartItem;
