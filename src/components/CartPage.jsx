import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../Context';
import Product from './Product'

const CartPage = () => {

  const { cart, setCart } = useContext(Cart) ;
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  },[cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: $.{total}</span>
      <div className="productContainer">
        {cart.map((product) => (
        <Product product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default CartPage