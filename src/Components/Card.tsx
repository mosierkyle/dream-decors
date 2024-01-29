import './Card.css';
import { Link } from 'react-router-dom';
import React from 'react';

interface CardProps {
  name: string;
  price: number;
  image: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ name, price, image, id }) => {
  return (
    <div className="card-div">
      <Link data-testid="item-card" className="card-link" to={`/item/${id}`}>
        <div className="card-image-div">
          <img className="card-image" src={image} alt={name} />
        </div>
        <div className="card-info">
          <p className="card-name">{name}</p>
          <p className="card-price">${price}.99</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
