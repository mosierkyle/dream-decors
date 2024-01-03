import { useEffect, useState } from 'react';
import livingProducts from '../../Data/livingProducts';

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

const Living = () => {
  const { data, error, loading } = getData();

  return (
    <div className="App">
      <h1>LIVING</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the living data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Living;
