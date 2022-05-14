import React, { useContext } from 'react';
import CartContext from '../Context/Cart/CartContext';

const Nav = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='bg-dark text-light d-flex justify-content-around py-2 fw-bold align-items-center'>
            <div>
                <span className='fs-4'>Shopping</span>
            </div>
            <div>
                <span>
                    <i class="fa-solid fa-cart-plus"></i>
                    {cartItems.length > 0 && <span>{cartItems.length}</span>}
                </span>
            </div>
        </div>
    );
};

export default Nav;