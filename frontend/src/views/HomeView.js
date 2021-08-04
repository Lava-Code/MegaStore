import React from 'react'
import Product from '../components/Product'
import './HomeView.css'

function HomeView() {
    return (
        <div className="homescreen">
            <h3 className='homescreen__title'>Latest Products</h3>
            <div className="homescreen__products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}
export default HomeView
