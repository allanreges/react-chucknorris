import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home';
import Category from './pages/Category'

export default function Routes() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/category" component={Category} />
            </Switch>
        </>
    )
}