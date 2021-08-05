import React from 'react'
import { Container } from 'react-bootstrap'
import ListCart from './Cart/ListCart'

const Card = () => {
    document.title='Giỏ hàng'
    return (
        <div className='cart'>
            <Container className ='cart__container'>
                <ListCart />
            </Container>

        </div>
    )
}

export default Card
