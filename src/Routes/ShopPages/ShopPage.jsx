import { useEffect, useState } from 'react';
import allProducts from '../../Data/allProducts';
import Card from '../../Components/Card';
import { Link } from 'react-router-dom';

const ShopPage = () => {
  const [sort, setSort] = useState('select-one');
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
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
        setData(response);
        setSortedData(response);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getResponse();
  }, []);

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
      setSortedData(sortByName(data));
    } else if (sort == 'price') {
      setSortedData(sortByPrice(data));
    } else {
      setSortedData(data);
    }
  }, [sort, data]);

  const handleSort = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
  };

  return (
    <div className="shop-content">
      <div className="sort-feature">
        <select
          className="sort-dropdown"
          onChange={handleSort}
          value={sort}
          id="dropdown"
        >
          <option className="sort-option" value="select-one">
            Sort By:
          </option>
          <option className="sort-option" value="recommended">
            Recommended
          </option>
          <option className="sort-option" value="name">
            A-Z
          </option>
          <option className="sort-option" value="price">
            Low-High
          </option>
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
      </div>
      <p className="shop-heading" data-testid="shop-page-heading">
        SHOP ALL FURNITURE
      </p>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the furniture data - ${error}`}</div>
      )}
      <div className="shop-cards">
        {sortedData &&
          sortedData.map(({ name, id, image, price }) => {
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

export default ShopPage;
