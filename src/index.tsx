import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './configStore'

import App from './App'
import './index.css'

const store = configureStore({});

ReactDOM.render<Element>((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))
