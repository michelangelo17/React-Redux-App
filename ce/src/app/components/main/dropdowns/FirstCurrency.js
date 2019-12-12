import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setBase, getRates } from '../../../../redux/actions/currencyActions'

const FirstCurrency = () => {

  const { currencyOptions, baseCurrency, countryName } = useSelector(state => state.currency)

  const dispatch = useDispatch()

  const countryList = currencyOptions
    .flatMap(currency => currency.countries)
    .sort()
    .map(country => ({ value: country, label: country }))

  useEffect(() => {
    dispatch(getRates(baseCurrency.currencyCode))
  }, [baseCurrency.currencyCode, dispatch])

  const handlChange = e => {
    dispatch(setBase(e.value))
  }

  return (
    <>
      <Select
        placeholder='Select base currency'
        onChange={handlChange}
        className='FirstCurrencySelector'
        options={countryList}
      />
      <h2>{countryName}</h2>
      <h3>Currency: {baseCurrency.currencyName}</h3>
      <h3>Currency Code: {baseCurrency.currencyCode}</h3>
    </>
  )
}

export default FirstCurrency
