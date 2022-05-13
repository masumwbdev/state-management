import React from 'react';
import ProductCard from '../Components/ProductCard';
import products from '../data';
import './HomeScreen.css'

const HomeScreen = () => {

    return (
        <div className='row container mx-auto mt-5'>
            {
                products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default HomeScreen;