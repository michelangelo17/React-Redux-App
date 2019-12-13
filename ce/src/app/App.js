import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.scss'
import FirstCurrency from './components/main/dropdowns/FirstCurrency'
import SecondCurrency from './components/main/dropdowns/SecondCurrency'
import ExchangeInfo from './components/main/ExchangeInfo'
import { getLocation } from '../redux/actions/locationActions'

const App = () => {
  const { userLocation } = useSelector(state => state.location)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocation())
  }, [dispatch, userLocation])

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
