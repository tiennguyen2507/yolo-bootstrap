import React from 'react'
import Banner from './Homes/Banner'
import HeroSlider from './Homes/Heroslider'
import PolicyCart from './Homes/PolicyCart'
import ProductCart from './Homes/ProductCart'
import Slides from './Homes/Slides'

const Home = () => {
    document.title='Trang chủ'
    return (
        <div>
            <HeroSlider />
            <PolicyCart />
            <ProductCart/>
            <Banner />
            <Slides></Slides>
        </div>
    )
}
export default Home
