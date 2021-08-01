import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../Pages/About'
import Card from '../Pages/Card'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Login from '../Pages/Login'

const Router = () => {
    return (
        <Switch>
            <Route path ='/' exact component={Home} />
            <Route path ='/catalog/:slug' component={Products} />
            <Route path ='/catalog/'    component={Products} />
            <Route path ='/cart' component={Card} />
            <Route path ='/about' component={About} />
            <Route path ='/login' component={Login} />
        </Switch>
    )
}

export default Router
