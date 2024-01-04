import { useEffect, useState } from 'react';
import diningProducts from '../../Data/diningProducts';
import Card from '../../Components/Card';

const getData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        //furniture
        let response = diningProducts;
        if (!response) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response);
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

const Dining = () => {
  const { data, error, loading } = getData();

  return (
    <div className="shop-content">
      <p className="shop-heading">DINING ROOM FURNITURE</p>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the dinning data - ${error}`}</div>
      )}
      <div className="shop-cards">
        {data &&
          data.map(({ name, id, image, price }) => {
            return (
              <Card key={id} name={name} image={image} price={price}></Card>
            );
          })}
      </div>
    </div>
  );
};

export default Dining;
