import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setComparison } from '../../../../redux/actions/currencyActions'

const SecondCurrency = () => {
  const {
    currencyOptions,
    secondCountryName,
    firstCountryName,
    comparisonCurrency,
  } = useSelector(state => state.currency)

  const dispatch = useDispatch()

  const countryList = currencyOptions
    .flatMap(currency => currency.countries)
    .sort()
    .filter(country => country !== firstCountryName)
    .map(country => ({ value: country, label: country }))

  const handlChange = e => {
    dispatch(setComparison(e.value))
  }

  return (
    <>
      <Select
        placeholder='Select country to compare'
        onChange={handlChange}
        className='SecondCurrencySelector'
        options={countryList}
      />
      <h2>{secondCountryName}</h2>
      <h3>Currency: {comparisonCurrency.currencyName}</h3>
      <h3>Currency Code: {comparisonCurrency.currencyCode}</h3>
    </>
  )
}

export default SecondCurrency
