import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../Pages/About'
import Card from '../Pages/Card'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Login from '../Pages/Login'
import Voucher from '../Pages/Voucher'

const Router = () => {
    return (
        <Switch>
            <Route path ='yolo-bootstrap/' exact component={Home} />
            <Route path ='/product/:slug' component={Products} />
            <Route path ='/product/'    component={Products} />
            <Route path ='/cart' component={Card} />
            <Route path ='/about' component={About} />
            <Route path ='/login' component={Login} />
            <Route path ='/voucher' component={Voucher} />
        </Switch>
    )
}

export default Router
