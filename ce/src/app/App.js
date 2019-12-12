import React from 'react'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'
import SecondCurrency from './components/main/dropdowns/SecondCurrency'
import ExchangeInfo from './components/main/ExchangeInfo'

const App = () => {
  return (
    <div className='App'>
      <h1>Simple Currency Exchanger</h1>
      <FirstCurrency />
      <SecondCurrency />
      <ExchangeInfo />
    </div>
  )
}

export default App
