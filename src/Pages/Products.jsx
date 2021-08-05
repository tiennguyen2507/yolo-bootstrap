import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import products from '../assets/fake-data/products'
import Slides from './Homes/Slides'
import PolicyCart from './Homes/PolicyCart'
import Product_details from './Products/Product_details'

document.title='Sản phẩm'
const Products = () => {
    
    const [state, setstate] = useState([])

    useEffect(() => {
        
            const idLocal01 =JSON.parse(localStorage.getItem('productId'))
            const data01 =products.filter((value) => {
                return value.id === idLocal01[0].id
         })
            setstate(data01[0])
    }, [])
    const idLocal01 = JSON.parse(localStorage.getItem('productId'))
    const data01 = products.filter((value) => {
        return value.id === idLocal01[0].id
    })
    const data = data01[0]
    // start amout-----------------
    const [amout, setamout] = useState(1)
    const addamout = () => {
        if (amout < 10) {
            setamout(amout + 1)
        }
    }
    const minusamout = () => {
        if (amout > 0) {
            setamout(amout - 1)
        }
    }
    //end amout-----------------
    //start image--------------

    const image = [data.image01, data.image02]
    const [lenghtimage, setlenghtimage] = useState(data.image01)

    const clickimage = (image01) => {
        setlenghtimage(image01)
        console.log(image01)
    }
    //end image--------------
    // start color-----------------
    const [color, setcolor] = useState('blue')
    const selectcolor = (data) => {
        setcolor(data)
        console.log(color)
    }
    // ends color-----------------
    // start size--------------
    const [size, setsize] = useState("X")
    const selectSize = (data) => {
        setsize(data)
        console.log(color)
    }


    // ends size---------------



    return (
        <div className='product'>
            <Container className='product__container'>
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8} className='product__left'>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={9} className='product__left__01' >
                                <img src={lenghtimage} alt="" />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={3} className='product__left__02'>
                                <img src={image[0]} onClick={() => { clickimage(image[0]) }} alt="" />
                                <img src={image[1]} onClick={() => { clickimage(image[1]) }} alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} className='product__right'>
                        <div className="product__right__title">
                            <h1>{data.title}</h1>
                        </div>

                        <div className="product__right__status">
                            <p> Mã: APN3724 </p>
                            <p>Tình trạng:<strong>Còn hàng</strong> </p>
                        </div>
                        <div className="product__right__price">
                            <h1>{data.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} đ</h1>
                            <p>300.000đ</p>
                        </div>
                        <div className="product__right__color">
                            <p>Màu sắc</p>
                            <div className="product__right__color__select ">
                                <div className={`bg-blue ${(color === 'blue') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('blue') }}></div>
                                <div className={`bg-red ${(color === 'red') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('red') }}></div>
                                <div className={`bg-orange ${(color === 'orange') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('orange') }}></div>
                                <div className={`bg-pink ${(color === 'pink') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('pink') }}></div>
                                <div className={`bg-gray ${(color === 'gray') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('gray') }}></div>
                                <div className={`bg-white ${(color === 'white') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('white') }}></div>
                                <div className={`bg-black ${(color === 'black') ? 'selectcolor' : ""}`} onClick={() => { selectcolor('black') }}></div>
                            </div>
                        </div>
                        <div className="product__right__size">
                            <p>Kích thước</p>
                            <div className="product__right__size__select">
                                <div className={`${size === 'S' ? 'selectSize' : ""}`} onClick={() => { selectSize('S') }} >S</div>
                                <div className={`${size === 'XS' ? 'selectSize' : ""}`} onClick={() => { selectSize('XS') }}>XS</div>
                                <div className={`${size === 'M' ? 'selectSize' : ""}`} onClick={() => { selectSize('M') }}>M</div>
                                <div className={`${size === 'L' ? 'selectSize' : ""}`} onClick={() => { selectSize('L') }}>L</div>
                                <div className={`${size === 'XL' ? 'selectSize' : ""}`} onClick={() => { selectSize('XL') }}>XL</div>
                            </div>
                        </div>
                        <div className="product__right__suggest">
                            <i className='bx bx-question-mark bx-tada' ></i>
                            <p>Gợi ý tìm size vừa vặn</p>
                        </div>
                        <div className="product__right__amount">
                            <p>Số lượng :</p>
                            <div>
                                <i className='bx bxs-chevron-down' onClick={minusamout}></i>
                                <input readOnly type="text" value={amout} />
                                <i className='bx bxs-chevron-up' onClick={addamout}></i>
                            </div>
                        </div>
                        <div className="product__right__add">
                            <p>Thêm vào giỏ hàng</p>

                        </div>
                        <div className="product__right__buy">
                            <p>Mua ngay</p>
                        </div>
                        <div className="product__right__info">
                            <div className="product__right__info__title">Thông tin chất liệu</div>
                            <div className="product__right__info__details">
                                <h1>
                                    Đặc tính:
                                </h1>
                                <ul>
                                    <li>
                                        Vải coolmax nhẹ, xốp, thoáng mát, truyền dẫn ẩm tốt.</li>
                                    <li>
                                        Bề mặt sợi có rãnh làm tăng khả năng truyền dẫn khí, hút ẩm cực tốt và cực kỳ nhanh khô.</li>
                                    <li>
                                        Sản phẩm có tính đàn hồi co giãn tốt, ít nhàu, tiện dụng khi vận động và sử dụng trong mọi hoàn cảnh.
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Product_details />
            </Container>
            <PolicyCart />
            <Slides />
        </div>
    )
}

export default Products
