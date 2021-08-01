import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const PolicyCart = () => {
    return (
        <div className='policyCart'>
            <Container>
                <Row className='policyCart__row'>
                    <Col xs={12} sm={6} md={6} lg={3} className='policyCart__row__col'>
                        <div className='policyCart__row__col__shadow'>
                            <div className='policyCart__row__col__shadow__icon'>
                                <i className='bx bx-shopping-bag  bx-tada' />
                            </div>
                            <div className='policyCart__row__col__shadow__title'>
                                <h1>Miễn Phí giao hàng</h1>
                                <p> Miễn phí ship cho đơn hàng trên 235k</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className='policyCart__row__col'>
                        <div className='policyCart__row__col__shadow'>
                            <div className='policyCart__row__col__shadow__icon'>
                                <i className='bx bx-credit-card  bx-tada' />
                            </div>
                            <div className='policyCart__row__col__shadow__title'>
                                <h1>Thanh toán COD</h1>
                                <p> Thanh toán khi nhận hàng(COD)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className='policyCart__row__col'>
                        <div className='policyCart__row__col__shadow'>
                            <div className='policyCart__row__col__shadow__icon'>
                                <i className='bx bx-diamond  bx-tada' />
                            </div>
                            <div className='policyCart__row__col__shadow__title'>
                                <h1>Khách hàng Vip</h1>
                                <p>Ưu đãi dành cho khách hàng Vip</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className='policyCart__row__col'>
                        <div className='policyCart__row__col__shadow'>
                            <div className='policyCart__row__col__shadow__icon'>
                                <i className='bx bx-donate-heart bx-tada' />
                            </div>
                            <div className='policyCart__row__col__shadow__title'>
                                <h1>Hỗ trợ bảo hành</h1>
                                <p>Đổi,sửa đồ tại tất cả các store</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default PolicyCart
