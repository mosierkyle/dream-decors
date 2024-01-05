import allProducts from '../Data/allProducts';

const getData = (id) => {
  const findProductById = (productId) => {
    const noColon = productId.replace(/:/g, '');
    return allProducts.find((product) => product.id === noColon);
  };

  let data = findProductById(id);

  return data;
};

export default getData;
