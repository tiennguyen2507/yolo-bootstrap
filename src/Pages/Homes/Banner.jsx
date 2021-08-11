import React from 'react'
import { Container } from 'react-bootstrap'

import PropTypes from 'prop-types'


const Banner = props => {
    return (
        <div className='home-banner'>
            <Container>
                <div className='home-banner__item'>
                    <img src={props.src} alt="" />
                </div>
            </Container>
        </div>
    )
}

Banner.propTypes={
    src:PropTypes.string.isRequired
}


export default Banner


