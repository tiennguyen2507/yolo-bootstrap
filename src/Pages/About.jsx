import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    document.title='Liên hệ'
    return (
        <div className='about'>
            <Container>
                <div className='about__map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13223.626868794057!2d108.30871007682865!3d15.68173228326519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169e3acfbbe19fb%3A0x4af4c5dd3674c4d0!2zQ-G6p3Ugw5RuZyBUcmnhu4d1!5e1!3m2!1svi!2sus!4v1627916144736!5m2!1svi!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className='about__contact__left'>
                            <div className='about__contact__left__01'>
                                <p>Họ tên *</p>
                                <input type="text" />
                            </div>
                            <div className='about__contact__left__01'>
                                <p>Email *</p>
                                <input type="text" />
                            </div>
                            <div className='about__contact__left__01'>
                                <p>Điện thoại *</p>
                                <input type="text" />
                            </div>
                            <div className='about__contact__left__02'>
                                <p>Lời nhắn *</p>
                                <input type="text" />
                            </div>
                            <div className='about__contact__left__01'>
                                <p></p>
                                <button>gửi </button>
                            </div>
                        </div>

                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                        <div className="about__contact__right">
                            <strong>
                                Để lại lời nhắn, hoặc những góp ý của bạn với Yody. Yody sẽ đọc và liên hệ lại với bạn ngay nhé!
                            </strong>
                            <div>
                                <div>
                                    <i className='bx bxs-phone-call'></i>
                                    <h1>Gọi mua hàng (08:00 - 22:00)</h1>
                                </div>
                                <p>1800 2086 (miễn phí)</p>
                                <p>Tất cả các ngày trong tuần</p>
                            </div>
                            <div>
                                <div>
                                    <i className='bx bxs-phone-call'></i>
                                    <h1> Góp ý - khiếu nại (08:00 - 22:00)</h1>
                                </div>
                                <p>1800 2086 (miễn phí)</p>
                                <p>Tất cả các ngày trong tuần</p>
                            </div>
                            

                        </div>
                    </Col>
                </Row>


            </Container>
        </div>


    )
}

export default About
