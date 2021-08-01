import React from 'react'

const PageRegistration = () => {
    return (
        <div className ='pageRegistration'>
            <h1> Đăng ký tài khoản</h1>
            <div className='pageRegistration__form'>
                <p>tên đăng nhập</p>
                <input type = 'text' />
            </div>
            <div  className='pageRegistration__form'>
                <p>mật khẩu</p>
                <input type = 'password' />
            </div>
            <div  className='pageRegistration__form'>
                <p>nhập lại mật khẩu</p>
                <input type = 'password' />
            </div>
            <div  className='pageRegistration__form'>
                <p>Số điện thoại</p>
                <input type = 'password' />
            </div>
            
            <button>Đăng ký</button>
        </div>
    )
}

export default PageRegistration
