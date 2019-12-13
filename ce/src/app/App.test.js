import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

test('renders title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const title = getByText(/currency exchanger/i)
  expect(title).toBeInTheDocument()
})