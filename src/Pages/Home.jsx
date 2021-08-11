import React from 'react'
import Banner from './Homes/Banner'
import HeroSlider from './Homes/Heroslider'
import PolicyCart from './Homes/PolicyCart'
import ProductCart from './Homes/ProductCart'
import Slides from './Homes/Slides'

import banner from '../assets/images/banner.png'
import banner03 from '../assets/images/panner03.png'

const Home = () => {
    document.title='Trang chủ'
    return (
        <div>
            <HeroSlider />
            <PolicyCart />
            <Banner src={banner03} />
            <ProductCart/>
            <Banner src={banner} />
            <Slides ></Slides>
        </div>
    )
}
export default Home
