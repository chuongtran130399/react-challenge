import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Container } from '@material-ui/core'

import reducer from '../reducer'
import { HelloWorld } from './'

/* eslint-disable @typescript-eslint/no-explicit-any */
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
const replace = () => {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const nextReducer = require('../reducer')
  store.replaceReducer(nextReducer)
}

if (module.hot) {
  module.hot.accept('../reducer', replace)
}

const App = () => (
  <Provider store={store}>
    <Container>
      <HelloWorld />
    </Container>
  </Provider>
)

export default hot(module)(App)
