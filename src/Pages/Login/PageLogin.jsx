import React, { useState } from 'react'
import Alert from '../../components/Alert'

const PageLogin = () => {
    const [account, setaccount] = useState('')
    const [pass, setpass] = useState('')

    const login = () => {
        const login01 = localStorage.getItem('user') ? localStorage.getItem('user') : ''
        const login02 = JSON.parse(login01)
        const login03 = login02[0]

        if (account !== '' & pass !== "") {
            if (account === login03.account) {
                if (pass === login03.pass) {
                    const login04 = [
                        {
                            accLogin: account,
                            pass: pass
                        }
                    ]
                    localStorage.setItem('login', JSON.stringify(login04))
                    setaccount('')
                    setpass('')

                    alert('Đăng nhập thành công')
                } else { alert('mật khẩu không chính xác!!!') }


            } else { alert('tên đăng nhập không tồn tại!!!') }



        } else { alert('Vui lòng điền đầy đủ thông tin') }

    }


    return (
        <div className='pageLogin'>
            <h1> Đăng nhập tài khoản</h1>
            <div className='pageLogin__form'>
                <p>tên đăng nhập</p>
                <input type='text' value={account} onChange={(e) => { setaccount(e.target.value) }} />
            </div>
            <div className='pageLogin__form'>
                <p>mật khẩu</p>
                <input type='password' value={pass} onChange={(e) => { setpass(e.target.value) }} />
            </div>
            <div className='pageLogin__remember'>
                <div>
                    <input type="checkbox" />
                    <p>nhớ tài khoản</p>
                </div>
                <a href="hello">Quên mật khẩu?</a>
            </div>
            <button onClick={login} >Đăng nhập</button>
        </div>
    )
}

export default PageLogin
