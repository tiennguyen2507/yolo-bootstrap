import React,{useState} from 'react'

const PageRegistration = () => {
    const [fullName, setfullName] = useState('')
    const [account, setaccount] = useState('')
    const [pass, setpass] = useState('')
    const [phone, setphone] = useState('')
    const registration =()=>{
        const user = [
            {  fullname: fullName,
                account: account,
                pass: pass,
                phone:phone,
            }
        ]
        console.log(user)
        if (fullName!==''&account!==''&pass!==''&phone!=='') {
            localStorage.setItem('user',JSON.stringify(user))
            setfullName('')
            setaccount('')
            setpass('')
            setphone('')
            alert('Chúc mừng!Bạn đã đăng ký thành công!!!')
        }else{alert('vui lòng nhập đầy đủ thông tin!!!')}
        
    }
    return (
        <div className ='pageRegistration'>
            <h1> Đăng ký tài khoản</h1><div className='pageRegistration__form'>
                <p>Họ và tên</p>
                <input type = 'text' value={fullName} onChange ={(e)=>{setfullName(e.target.value)}} />
            </div>
            <div className='pageRegistration__form'>
                <p>tên đăng nhập</p>
                <input type = 'text' value={account} onChange ={(e)=>{setaccount(e.target.value)}} />
            </div>
            <div  className='pageRegistration__form'>
                <p>mật khẩu</p>
                <input type = 'password' value={pass} onChange ={(e)=>{setpass(e.target.value)}}/>
            </div>
            <div  className='pageRegistration__form'>
                <p>Số điện thoại</p>
                <input type = 'text' value={phone} onChange ={(e)=>{setphone(e.target.value)}} />
            </div>
            
            <button onClick={registration}>Đăng ký</button>
        </div>
    )
}
export default PageRegistration
