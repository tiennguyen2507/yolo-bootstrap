import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='home-banner'>
            <Container>
                <div className='home-banner__item'>
                    <img src={banner} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Banner
