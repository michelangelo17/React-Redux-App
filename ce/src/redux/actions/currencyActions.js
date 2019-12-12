import Axios from "axios"

export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY'
export const SET_BASE_COUNTRY_NAME = 'SET_BASE_COUNTRY_NAME'
export const GET_RATES_START = 'GET_RATES_START'
export const GET_RATES_SUCCESS = 'GET_RATES_SUCCESS'
export const GET_RATES_ERROR = 'GET_RATES_ERROR'

export const setBaseCurrency = string => {
  return { type: SET_BASE_CURRENCY, payload: string }
}

export const setBaseCountryName = string => {
  return {type: SET_BASE_COUNTRY_NAME, payload: string}
}

export const getRates = string => {
  return dispatch => {
    dispatch({type: GET_RATES_START})
    Axios.get(
      `https://api.exchangerate-api.com/v4/latest/${string}`
    )
      .then(res => dispatch({type: GET_RATES_SUCCESS, payload:res.data.rates}))
      .catch(err => dispatch({type: GET_RATES_ERROR, payload:err}))
  }
}

export const setBase = string => {
  return dispatch => {
    dispatch(setBaseCountryName(string))
    dispatch(setBaseCurrency(string))
  }
}
