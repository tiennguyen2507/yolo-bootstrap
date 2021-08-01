import React, { useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import heroSliderData from '../../assets/fake-data/hero-slider'
import { Link } from 'react-router-dom'
import { useCallback } from 'react'
const HeroSlider = () => {
    const data = heroSliderData
    const [active, setactive] = useState(0)
    const nextslide = useCallback(() => {
        const index = (active + 1 === data.length) ? 0 : active + 1
        setactive(index)
    }, [active,data]);
    const pveSlide = useCallback(() => {
        const index = (active - 1 < 0) ? data.length -1 : active - 1
        setactive(index)
    }, [active,data]);
    return (
        <div>
            <div className="home">
                <Container>
                    {data.map((value, index) => (
                        <Row className={`home__item ${(index === active) ? 'active' : ''}`} key={index}>
                            <Col xs={12} sm={8} md={8} lg={8} className="home__item__left">
                                <div className="home__item__left__title">
                                    <p> {value.title}</p>
                                </div>
                                <div className="home__item__left__description">
                                    <p> {value.description}</p>
                                </div>
                                <div className="home__item__left__button">
                                    <Link to={value.path}>
                                        <button>
                                              <i className='bx bxs-cart home__item__left__button__icon'></i>
                                           <p className="home__item__left__button__text">Xem chi tiết</p> 
                                          
                                        </button>
                                    </Link>
                                </div>
                            </Col >
                            <Col xs={12} sm={4} md={4} lg={4} className="home__item__right">
                                <div className = "shape"></div>
                                <img src={value.img} alt="" />
                            </Col >
                            <Col xs={12} sm={12} md={12} lg={12} className="home__item__control">
                                <i className='bx bx-chevron-left'onClick={pveSlide} />
                                <p>{active + 1 }/{data.length}</p>
                                <i className='bx bx-chevron-right' onClick={nextslide} />
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </div>
    )
}

export default HeroSlider