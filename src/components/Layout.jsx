import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'
import Router from '../Router/Router'
import Media from './Media'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <Router />
            </div>
            <Footer />
            <Media />
        </BrowserRouter>

    )
}

export default Layout
