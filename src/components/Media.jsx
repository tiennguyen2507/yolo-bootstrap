import React, { useState } from 'react'
import media from '../assets/images/giam20.png'
import { Link } from 'react-router-dom'

const Media = () => {
    const [display, setdisplay] = useState('block')
    const close = () => {
        setdisplay('none')
    }
    return (
        <div className='media' style={{ display: display }} >
            <Link to='/voucher'>
                <img src={media} alt="" className='bx-tada' />
            </Link>
            <i className='bx bxs-x-circle' onClick={close} />
        </div>

    )
}
export default Media
