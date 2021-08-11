import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PageLogin from './Login/PageLogin'
import PageRegistration from './Login/PageRegistration'

const Login = () => {
    document.title='Đăng nhập'



    return (

        <div className='login'>
            <ul>
                <Link to='/login'>
                    <p> 
                        đăng nhập
                    </p>
                </Link>
                <Link to='/login/pageregistration'>
                    <p>
                        đăng ký
                    </p>
                </Link>
            </ul>
            <Switch>
                <Route path='/login' exact component={PageLogin} />
                <Route path='/login/pageregistration' component={PageRegistration} />
            </Switch>
       
            
        </div>
    )
}

export default Login
