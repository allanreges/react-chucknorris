
import { combineReducers, createStore } from 'redux';

import list from './list/reducer'

const enhacer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : ''

const store = createStore(combineReducers({ list }), enhacer)


export default store;