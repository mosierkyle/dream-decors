import { useState } from 'react';
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
}) => {
  const [q, setQ] = useState(quantity);
  const [p, setP] = useState(quantity * price);

  function quantityChange(e) {
    if (e <= 1) {
      removeFromCart(id);
      return;
    }
    setQ(e.target.value);
    changeItemQuantity(id, e.target.value);
  }

  function quanityIncrease() {
    let newQ = q + 1;
    let newP = newQ * price;
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }

  function quanityDecrease() {
    if (q <= 1) {
      removeFromCart(id);
      return;
    }
    let newQ = q - 1;
    let newP = newQ * price;
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }
  return (
    <>
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
    </>
  );
};

export default CartItem;
