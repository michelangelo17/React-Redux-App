import React from 'react'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'
import SecondCurrency from './components/main/dropdowns/SecondCurrency'
import ExchangeInfo from './components/main/ExchangeInfo'

const App = () => {
  return (
    <>
      <h1>Simple Currency Exchanger</h1>
      <main>
        <section className='dropdowns'>
          <FirstCurrency />
          <SecondCurrency />
        </section>
        <section className='result'>
        <ExchangeInfo />
        </section>
      </main>
    </>
  )
}

export default App
