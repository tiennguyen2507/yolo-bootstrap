import React, { useState } from 'react'
import Alert from '../../components/Alert'


const PageLogin = props => {
    const [activeAlert01, setactiveAlert01] = useState('')
    const [account, setaccount] = useState('')
    const [pass, setpass] = useState('')
    const [titleAlert,settitleAlert]= useState('')

    const close =()=>{
        if (activeAlert01==="") {
            setactiveAlert01('activeAlert')
        }else{
            setactiveAlert01('')
        }
    }
     


    
    const login = () => {
        const login01 = localStorage.getItem('user') ? localStorage.getItem('user') : ''
        const login02 = JSON.parse(login01)
        const login03 = login02[0]

        close()

        

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

                    settitleAlert('Đăng nhập thành công')
                } else { settitleAlert('mật khẩu không chính xác!!!') }


            } else {settitleAlert('tên đăng nhập không tồn tại!!!') }



        } else { settitleAlert('Vui lòng điền đầy đủ thông tin') }

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
            <Alert active01={activeAlert01}  funcc={()=>{close()}}  >{titleAlert}</Alert>
        </div>
    )
}

export default PageLogin
