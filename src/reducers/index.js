import { combineReducers } from 'redux'
import rickandmorty from './rickandmorty'

const reducers = combineReducers({ rickandmorty })

export default (state, action) => reducers(state, action)