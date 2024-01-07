import { useEffect, useState } from 'react';
import livingProducts from '../../../Data/livingProducts';
import Card from '../../../Components/Card';
import './Living.css';
import { Link } from 'react-router-dom';

const getData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        //furniture
        let response = livingProducts;
        if (!response) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setData(response);
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

const Living = () => {
  const { data, error, loading } = getData();

  return (
    <div className="shop-content">
      <div className="bread-crumbs">
        <Link className="bread-crumb-text" to={'/'}>
          Home
        </Link>{' '}
        &gt;{' '}
        <Link className="bread-crumb-text" to={'/shop'}>
          Products
        </Link>{' '}
        &gt;{' '}
        <Link className="bread-crumb-text" to={'Living'}>
          Living
        </Link>
      </div>
      <p className="shop-heading">LIVING ROOM FURNITURE</p>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the dinning data - ${error}`}</div>
      )}
      <div className="shop-cards">
        {data &&
          data.map(({ name, id, image, price }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
              ></Card>
            );
          })}
      </div>
    </div>
  );
};

export default Living;
