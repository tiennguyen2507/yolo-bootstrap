import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import logo from '../assets/images/Logo-2.png'

const Footer = () => {
    const footerAboutLink = [
        {
            display: "Giới thiệu",
            path: '/about'
        },
        {
            display: "Liên hệ",
            path: '/about'
        },
        {
            display: "Tuyển dụng",
            path: '/about'
        },
        {
            display: "Tin tức",
            path: '/about'
        },
        {
            display: "Hệ thống cửa hàng",
            path: '/about'
        },
    ]
    const footerCustomsLink = [
        {
            display: "Chính sách đổi trả",
            path: '/about'
        },
        {
            display: "Chính sách bảo hành",
            path: '/about'
        },
        {
            display: "Chính sách hoàn tiền",
            path: '/about'
        },
    ]

    return (
        <div className="footer">
            <Container>
                <Row className="footer__row">
                    <Col xs={12} sm={12} md={6} lg={3} className="footer__row__col01">
                        <div>
                            <div className="footer__row__col01__title">
                                <p>
                                    Tổng đài hổ trợ
                                </p>
                            </div>
                            <div className="footer__row__col01__content">
                                <p>Liên hệ đặt hàng :<strong>0123456789</strong></p>
                                <p>Thắc mắc liên hệ  :<strong>0123456789</strong></p>
                                <p>Góp ý,khiếu nại : <strong>0123456789</strong></p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="footer__row__col02">
                        <div>
                            <div className="footer__row__col02__title">
                                <p>
                                    Về YoLo
                                </p>
                            </div>
                            <div className="footer__row__col02__content">
                                {footerAboutLink.map((value, index) => (
                                    <Link to={value.path} key={index} >
                                        <p>{value.display}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="footer__row__col03">
                        <div>
                            <div className="footer__row__col03__title">
                               <p> Chăm sóc khách hàng</p>
                            </div>
                            <div className="footer__row__col03__content">
                                {footerCustomsLink.map((value, index) => (
                                        <Link to={value.path} key={index}>
                                            <p>{value.display}</p>
                                        </Link>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="footer__row__col04">
                        <Link to='/'>
                            <img src={logo} className="footer__row__col04__logo" alt="" />
                        </Link>
                        <p>
                            Hướng tới mục tiêu mang lại niềm vui ăn mặt mới hằng ngày cho hàng triệu người tiêu dùng Việt,hãy cùng YoLo hướng tói một cuộc sống năng động,tích cực hơn
                        </p>
                    </Col>

                </Row>




            </Container>
        </div>
    )
}

export default Footer
