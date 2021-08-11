import React, { useState } from 'react'
import { Container, } from 'react-bootstrap'
import products from '../../assets/fake-data/products'




const Slides = () => {
    const data = products

    const [plusTF, setplusTF] = useState(0)

    const onclickbuttonleft = () => {
        if (plusTF < 0) {
            setplusTF(plusTF + 500)
            const style = `translateX(${plusTF}%)`
            console.log(style)
        }else{
            setplusTF(-1500)
        }
    }
    const onclickbuttonright = () => {
        if (plusTF > -1500) {
            setplusTF(plusTF - 500)
            const style = `translateX(${plusTF}%)`
            console.log(style)
        }else{
            setplusTF(0)
        }
    }
   
    return (

        <div>
            <div>
                <div className='slides'>
                    <Container className='slides__container' >
                        <div className="slides__title">
                            <h1>Top bán chạy trong tuần</h1>
                        </div>
                        <div className='slides__row' >
                            {data.map((value, index) => (
                                <div className='slides__col' key={index} id='left' style={{transform: `translateX(${plusTF}%)`}} >
                                    <div className='slides__item'>
                                        <div className="slides__item__image">
                                            <img src={value.image01} className="slides__item__image__01" alt="" />
                                            <img src={value.image02} className="slides__item__image__02" alt="" />
                                        </div>
                                        <div className="slides__item__name">
                                            <h1>{value.title}</h1>
                                        </div>
                                        <div className="slides__item__price">
                                            <h1>{value.price}</h1>
                                            <p>399.000 VND</p>
                                        </div>
                                        <div className="slides__item__button">
                                            <button> mua ngay </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="slides__row__button__left" onClick={onclickbuttonleft}>
                                <i className='bx bxs-chevron-left-circle bx-tada bx-rotate-90' ></i>
                            </div>
                            <div className="slides__row__button__right" onClick ={onclickbuttonright}>
                                <i className='bx bxs-chevron-right-circle bx-tada bx-rotate-90' ></i>
                            </div>

                        </div>
                    </Container>
                </div>
            </div>

        </div>
    )
}

export default Slides

