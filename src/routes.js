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
                <Route path="/react-chucknorris" exact component={Home} />
                <Route path="/react-chucknorris/category" component={Category} />
            </Switch>
        </>
    )
}