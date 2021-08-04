import React from 'react'
import './ProductView.css'

function ProductView() {
    return (
        <div className='productView'>
            <div className='prdoductView__left'>
                <div className='left__imge'>
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt='Name'/>
                </div>

                <div className='left__info'>
                    <p className='left__name'>PlayStation 5</p>
                    <p>Price: $499.99</p>
                    <p>Description: PlayStation 5 (PS5) is a home video game console developed by Sony</p>
                </div>
            </div>

            <div className='productView__right'>
                <div className='right__info'>
                    <p>
                        price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Quantity
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>Add To Cart</button>
                    </p>
                </div>
            </div>
    
        </div>
    )
}

export default ProductView
