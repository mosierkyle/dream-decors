import { useParams } from 'react-router-dom';
import allProducts from '../../Data/allProducts';
import { useState, useEffect } from 'react';
import Item from '../../Components/Item';

const getData = (id) => {
  const findProductById = (productId) => {
    const noColon = productId.replace(/:/g, '');
    return allProducts.find((product) => product.id === noColon);
  };

  let data = findProductById(id);

  return data;
};

const ItemPage = ({ back }) => {
  const { id } = useParams();
  const data = getData(id);

  return (
    <div>
      <Item
        name={data.name}
        image={data.image}
        price={data.price}
        category={data.category}
        back={back}
      ></Item>
    </div>
  );
};

export default ItemPage;
