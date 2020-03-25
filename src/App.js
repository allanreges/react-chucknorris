import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import './config/reactotronConfig'
import history from './services/history'
import store from './store/index'

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes>
                </Routes>
                <GlobalStyle></GlobalStyle>
            </Router>
        </Provider>
    )
}

