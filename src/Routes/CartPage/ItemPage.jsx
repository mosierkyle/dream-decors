import { useParams } from 'react-router-dom';
import allProducts from '../../Data/allProducts';
import { useState, useEffect } from 'react';
import Item from '../../Components/Item';
import getData from '../../Components/getData';

const ItemPage = ({ cart, addToCart }) => {
  const { id } = useParams();
  const data = getData(id);

  return (
    <div>
      <Item
        name={data.name}
        image={data.image}
        price={data.price}
        category={data.category}
        addToCart={addToCart}
        id={data.id}
      ></Item>
    </div>
  );
};

export default ItemPage;
