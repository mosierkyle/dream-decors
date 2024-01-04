import './Card.css';

const Card = ({ name, price, image }) => {
  return (
    <div className="card-div">
      <div className="card-image-div">
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-price">${price}.99</p>
      </div>
    </div>
  );
};

export default Card;
