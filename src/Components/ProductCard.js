import React, { useContext } from 'react';
import CartContext from '../Context/Cart/CartContext';
import './ProductCard.css'
import Rating from './Rating';

const ProductCard = ({ product }) => {
    const {addToCart} = useContext(CartContext);

    const { name, image, price, rating, numReviews } = product;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="mb-5">
                <img className='img-fluid' src={image} alt="" />
                <h5>{name}</h5>
                <p>{price}</p>
                <p><Rating value={rating} text={`${numReviews} reviews`} /></p>
                <button onClick={() => addToCart(product)} className='border-0 bg-dark text-light'>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;