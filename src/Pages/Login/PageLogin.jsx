import React from 'react'

const PageLogin = () => {
    return (
        <div className ='pageLogin'>
            <h1> Đăng nhập tài khoản</h1>
            <div className='pageLogin__form'>
                <p>tên đăng nhập</p>
                <input type = 'text' />
            </div>
            <div  className='pageLogin__form'>
                <p>mật khẩu</p>
                <input type = 'password' />
            </div>
            <div className='pageLogin__remember'>
                <div>
                    <input type="checkbox" />
                    <p>nhớ tài khoản</p>
                </div>
                <a href="hello">Quên mật khẩu?</a>
            </div>
            <button>Đăng nhập</button>
        </div>
    )
}

export default PageLogin
