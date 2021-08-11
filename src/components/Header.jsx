import React,{useRef} from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo-2.png'
import { Row} from 'react-bootstrap'

const Header = () => {
    const menuleft = useRef(null)

    const menuToogle = ()=>{
        menuleft.current.classList.toggle('active')
    }
    return (
       
            <div className="header">
                 <Container>
                <Row>
                    <Col xs={5} sm ={5} md={5} lg={4} >
                        <div className="header__left">
                            <div className="header__left__toogle" onClick={menuToogle}>
                                <i className='bx bx-menu-alt-left'></i>
                            </div>
                            <div className="header__left__menu" ref={menuleft}  onClick={menuToogle}>
                                 <i className='bx bx-chevron-left '></i>
                                <Link to='/' >
                                    <p>Trang chủ</p>
                                </Link>
                                <Link to='/product'  >
                                    <p>Sản Phẩm</p>
                                </Link>
                                <Link to='/voucher' >
                                    <p>Khuyến mãi</p>
                                </Link>
                                <Link to='/about' >
                                    <p>liên hệ</p>
                                </Link>
                            </div>
                            
                        </div>
                    </Col >
                    <Col xs={2} sm ={2} md={2} lg={4}>
                        <div className="header__logo">
                            <img src={Logo} alt="" />
                        </div>
                    </Col>
                    <Col xs={5} sm ={5} md={5} lg={4} >
                        <div className="header__right">
                            <div className="header__right__item header__right__item__alert__icon">
                                 <i className='bx bx-bell'></i>
                                 <div className="header__right__item__alert">
                                     <p>thông báo</p>
                                 </div>
                            </div>
                            <Link to='/cart'>
                                <i className="header__menu__item bx bx-search" />
                            </Link>

                            <Link to= '/cart'>
                                <i className="header__menu__item bx bx-shopping-bag" />
                            </Link>
                            <Link to='/login'>
                                <i className="header__menu__item  bx bx-user" />
                            </Link>
                        </div>
                    </Col>
                </Row>


                </Container>
            </div>
        
    )
}

export default Header
