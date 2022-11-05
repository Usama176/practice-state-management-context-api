import React, { useContext } from 'react'
import { Cart } from '../Context';

const Product = ({product}) => {

    const { cart, setCart } = useContext(Cart);

    return (
        <div className='products'>
            <img src={product.image} alt="productImage" />
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{product.name}</span>
                <span>$ {product.price.substring(0,3)}</span>
            </div>
            {!cart.includes(product) ? (
                <button 
                    className="add"
                    onClick={() => {
                        setCart([...cart, product]);
                    }}
                >
                    Add To Cart
                </button>
            ) : (
                <button 
                    className="add"
                    onClick={() =>{
                        setCart(cart.filter(p => p.id !== product.id));
                    }}
                >
                    Remove From Cart
                </button>
            )}
        </div>
    );
};

export default Product;