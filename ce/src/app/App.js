import React from 'react'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'

const App = () => {
  return (
    <div className='App'>
      <h1>Simple Currency Exchanger</h1>
      <FirstCurrency />
    </div>
  )
}

export default App
