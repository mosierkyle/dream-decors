import background from '/Users/kylemosier/repos/online-store/src/Assets/background/background.jpg';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div class="homepage-content">
      <div class="overlay"></div>
      <p className="homepage-header">Where comfort meets creativity</p>
      <Link className="homepage-link" to="shop">
        SHOP NOW
      </Link>
    </div>
  );
};

export default HomePage;
