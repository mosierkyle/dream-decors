import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ name, price, image, id }) => {
  return (
    <div data-testid="item-card" className="card-div">
      <Link className="card-link" to={`/item/${id}`}>
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
