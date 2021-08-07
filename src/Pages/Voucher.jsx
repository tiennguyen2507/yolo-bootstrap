import React from 'react'
import { Container } from 'react-bootstrap'
import banner from '../assets/images/panner02.png'

const Voucher = () => {
    document.title = 'Mã giảm giá'

    return (
        <div className='voucher'>
            <Container>
                <div className='voucher__banner'>
                    <img src={banner} alt="" />
                </div>
            </Container>
            <div className="voucher__code">
                <div className="voucher__code__title">
                    <h1>Nhận mã giảm giá 20%</h1>
                </div>
                <div className="voucher__code__code01">
                    <div className="voucher__code__code01__09">
                        <div>
                            <h2 className="voucher__code__code01__09__01"> Mã giảm giá</h2>

                        </div>
                        <div>
                            <h2 className="voucher__code__code01__09__01">0708QUABANMOI25K</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Voucher
