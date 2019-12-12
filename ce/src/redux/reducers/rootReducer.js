import { combineReducers } from 'redux'
import { currencyReducer } from './currencyReducers'

export const rootReducer = combineReducers({
  currency: currencyReducer
})