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
  const [sort, setSort] = useState('select-one');
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    const sortByName = (data) => {
      const sortedData = [...data];
      sortedData.sort((a, b) => a.id - b.id);
      return sortedData;
    };
    const sortByPrice = (data) => {
      const sortedData = [...data];
      sortedData.sort((a, b) => a.price - b.price);
      return sortedData;
    };

    if (sort == 'name') {
      setDisplayData(sortByName(data));
    } else if (sort == 'price') {
      setDisplayData(sortByPrice(data));
    } else {
      setDisplayData(data);
    }
  }, [sort]);

  const handleSort = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
  };

  return (
    <div className="shop-content">
      <div className="sort-feature">
        <select onChange={handleSort} value={sort} id="dropdown">
          <option value="select-one">Sort By:</option>
          <option value="recommended">Recommended</option>
          <option value="name">A-Z</option>
          <option value="price">Low-High</option>
        </select>
      </div>
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
