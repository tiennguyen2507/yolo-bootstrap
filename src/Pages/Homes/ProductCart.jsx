import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../../assets/fake-data/products'

const ProductCart = () => {
    const data = products


    return (
        <div>
            <div className='productCart'>
                <Container className='productCart__container' >
                    <div className="productCart__title">
                        <h1>Tất cả sản phẩm</h1>
                    </div>
                    <Row >
                        {data.map((value, index) => (
                            <Col xs={12} sm={6} md={6} lg={3} className='productCart__col' key ={index}>
                                <div className='productCart__item'>
                                    <div className="productCart__item__image">
                                        <img src={value.image01} className="productCart__item__image__01" alt="" />
                                        <img src={value.image02} className="productCart__item__image__02" alt="" />
                                    </div>
                                    <div className="productCart__item__name">
                                        <h1>{value.title}</h1>
                                    </div>
                                    <div className="productCart__item__price">
                                        <h1>{value.price}</h1>
                                        <p>399.000 VND</p>
                                    </div>
                                    <div className="productCart__item__button">
                                        <button> <p className='bx-burst'>mua ngay</p> </button>
                                    </div>
                                </div>
                            </Col>
                        ))}


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ProductCart
