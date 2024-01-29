import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

interface ItemProps {
  name: string;
  image: string;
  price: number;
  category: string;
  id: string;
  addToCart: (id: string, quantity: number) => void;
}

const Item: React.FC<ItemProps> = ({
  name,
  image,
  price,
  category,
  addToCart,
  id,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  function quantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  }

  function quantityIncrease() {
    setQuantity(quantity + 1);
  }

  function quantityDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="item-content">
      <div className="item-img-div">
        <img className="item-img" src={image} alt={name} />
      </div>
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <p className="item-price">${price}.99</p>
        <div className="item-cart">
          <div className="item-quantity">
            <button className="q-btn" onClick={quantityDecrease}>
              -
            </button>
            <input
              className="q-input"
              type="number"
              value={quantity}
              onChange={quantityChange}
            />
            <button className="q-btn" onClick={quantityIncrease}>
              +
            </button>
          </div>
          <button
            className="item-add-to-cart"
            onClick={() => {
              addToCart(id, quantity);
              setQuantity(1);
              alert('Item Successfully added to cart');
            }}
          >
            ADD TO CART
          </button>
          <Link to={`/${category}`} className="item-continue-btn">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
