import React from 'react'
import './CartView.css'
import CartItem from '../components/CartItem'

function CartView() {
    return (
        <div className='cartView'>
            <div className='cartView__left'>
                <h3>Shopping Cart</h3>
                <CartItem/>
            </div>

            <div className='cartView__right'>
                <div className='cartView__info'>
                    <p>Subtotal (0) Items</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed To Check</button>
                </div>
            </div>
        </div>
    )
}

export default CartView
