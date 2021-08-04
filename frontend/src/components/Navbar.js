import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({click}) {
// let numberStore = {cart: [1,2],product:[]};
// let newNumber = 12;
// const numberStore1 = {...numberStore,cart:[...numberStore.cart,newNumber]};
// console.log(numberStore1)

    return (
        <nav className='navbar'>
            <div className='navbar__log'>
                <h4>BATY Shopping Cart</h4>
            </div>
            <ul className='navbar__links'>
                <li>
                    <Link to= "/cart" className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartlogo__badge'>{0}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to= '/'>Shop</Link>
                </li>
            </ul>
            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
