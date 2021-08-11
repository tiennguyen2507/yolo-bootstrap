import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCart from './Homes/ProductCart'

import Banner from '../Pages/Homes/Banner'

import banner from '../assets/images/banner.png'

const Product = () => {
    return (
        <div className='product-catolog'>
            <Container> 
                  <Banner src={banner} />
                <Row>
                    <Col sx={12} sm={12} md={3} lg={3}>
                        <div className='product-catolog__left' >
                            <div>
                                <div className="product-catolog__left__title">
                                    <h1>Tất cả sản phẩm</h1>
                                </div>
                                <div className="product-catolog__left__select">
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p> áo thun</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p> áo somi</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>Quần jean</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-catolog__left__title">
                                    <h1>Màu sắc</h1>
                                </div>
                                <div className="product-catolog__left__select">
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>trắng</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p> đen</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>vàng</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="product-catolog__left__title">
                                    <h1>Size(kích thước)</h1>
                                </div>
                                <div className="product-catolog__left__select">
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>XS</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>M</p>
                                    </div>
                                    <div className="product-catolog__left__select__item">
                                        <input type="checkbox" />
                                        <p>L</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </Col>
                    <Col sx={12} sm={12} md={9} lg={9}>
                        <ProductCart></ProductCart>

                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default Product
