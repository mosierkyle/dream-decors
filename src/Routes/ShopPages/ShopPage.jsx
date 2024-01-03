import { useEffect, useState } from 'react';
import allProducts from '../../Data/allProducts';

const useImageURL = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        //furniture
        let response = allProducts;
        if (!response) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response);
        //home-decor
        // let response1 = await fetch(
        //   'https://dummyjson.com/products/category/home-decoration'
        // );
        // if (!response1.ok) {
        //   throw new Error(
        //     `This is an HTTP error: The status is ${response1.status}`
        //   );
        // }
        // let response1Json = await response1.json();
        // console.log(response1Json);
        // //combine the two
        // let products = { ...response, ...response1 };
        // console.log(products);
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

const ShopPage = () => {
  const { data, error, loading } = useImageURL();

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>
              {/* <img src={image} alt="thumbnail" /> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShopPage;
