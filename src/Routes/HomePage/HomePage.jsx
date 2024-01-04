import Card from '../../Components/Card';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import allProducts from '../../Data/allProducts';

const getData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        let response = allProducts;
        if (!response) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setData([response[0], response[4], response[8], response[9]]);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getResponse();
  }, []);

  return { data, error, loading };
};

const HomePage = () => {
  const { data, error, loading } = getData();
  return (
    <>
      <div className="homepage-content">
        <div className="overlay"></div>
        <p className="homepage-header">Where comfort meets creativity</p>
        <Link className="homepage-link" to="shop">
          SHOP NOW
        </Link>
      </div>
      <div className="homepage-featured">
        <p className="homepage-featured-header">FEATURED ITEMS</p>
        <div className="homepage-featured-content">
          {loading && <div>A moment please...</div>}
          {error && (
            <div>{`There is a problem fetching the dinning data - ${error}`}</div>
          )}
          {data &&
            data.map(({ name, id, image, price }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  id={id}
                  image={image}
                  price={price}
                ></Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
