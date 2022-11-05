import React, { useContext, useState } from 'react';
import faker from 'faker';
import Product from './Product';

faker.seed(100)

const Home = () => {

  // first generate an array with 20 undefined objects
  // then we are to map on it
  // then generating radom data in each array with faker
  const productsArray = [...Array(20)].map( () => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productsArray);

  console.log(cart)
  return (
    <div className='productContainer'>
      {products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default Home;