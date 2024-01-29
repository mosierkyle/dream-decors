import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './CartItem.css';

interface CartItemProps {
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  id: string;
  removeFromCart: (id: string) => void;
  changeItemQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  image,
  price,
  category,
  quantity,
  id,
  removeFromCart,
  changeItemQuantity,
}) => {
  const [q, setQ] = useState<number>(quantity);
  const [p, setP] = useState<number>(quantity * price);

  function quantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (parseInt(e.target.value) <= 1) {
      removeFromCart(id);
      return;
    }
    const newQ = parseInt(e.target.value);
    const newP = newQ * price;
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }

  function quanityIncrease() {
    const newQ = q + 1;
    const newP = newQ * price;
    setP(newP);
    setQ(newQ);
    changeItemQuantity(id, newQ);
  }

  function quanityDecrease() {
    const newQ = q - 1;
    const newP = newQ * price;
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
          <button
            data-testid="item-subtract"
            className="cart-q-btn"
            onClick={quanityDecrease}
          >
            -
          </button>
          <input
            className="cart-q-input"
            type="text"
            value={q}
            onChange={quantityChange}
            data-testid="item-quantity"
          />
          <button
            data-testid="item-add"
            className="cart-q-btn"
            onClick={quanityIncrease}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-price">
        <p data-testid="item-price" className="cart-item-total">
          ${p}.99
        </p>
      </div>
      <i
        onClick={() => removeFromCart(id)}
        className="fa-solid fa-trash cart-item-delete-btn"
        data-testid="item-trash"
      ></i>
    </>
  );
};

export default CartItem;
