import React, { useState } from 'react'
import dataCart from '../../assets/fake-data/dataCart'

const ListCart = () => {
    const data = dataCart[0]

    console.log(data)
    // start amout-----------------
    const [amout, setamout] = useState(data.amout)
    const addamout = () => {
        if (amout < 10) {
            setamout(amout + 1)
        }
    }
    const minusamout = () => {
        if (amout > 1) {
            setamout(amout - 1)
        }
    }
    // ends amout-----------------
    return (

        <div className="listCart">
            <table className="listCart__table">
                <thead>
                    <tr>
                        <th> Sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td className="listCart__title">
                            <img src={data.image02} alt="" />
                            <div>
                                <strong> SP:{data.title}</strong>
                                <p>Size: {data.size}</p>
                                <p>Màu: {data.colors}</p>
                            </div>
                        </td>
                        <td className="listCart__amout">
                            <div>
                                <i className='bx bxs-chevron-down' onClick={minusamout}></i>
                                <input readOnly type="text" value={amout} />
                                <i className='bx bxs-chevron-up' onClick={addamout}></i>
                            </div>
                        </td>
                        <td className="listCart__price">
                            <h1>{String(`${data.price * amout}`).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} đ</h1>
                            <p> đơn giá:{String(data.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} đ</p>
                        </td>
                        <td className="listCart__bin">
                            <i className='bx bxs-heart-circle'></i>
                            <i className='bx bx-trash'></i>
                        </td>


                    </tr>

                </tbody>

            </table>
        </div>
    )
}

export default ListCart
