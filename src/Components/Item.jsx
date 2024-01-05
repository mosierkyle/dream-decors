import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ name, image, price, category, back }) => {
  return (
    <div className="item-content">
      <div className="item-img-div">
        <img className="item-img" src={image} alt={name} />
      </div>
      <div className="item-info-div">
        <p className="item-name">{name}</p>
        <p className="item-descrption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <p className="item-price">{price}</p>
        <div className="item-purchase"></div>
        <Link to={back}>Go Back</Link>
      </div>
    </div>
  );
};

export default Item;
