import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import contadorReducer from './store/reducers/contador'
import resultadoReducer from './store/reducers/resultado'

const reducerRaiz = combineReducers({
    contador: contadorReducer,
    res: resultadoReducer
})

const store = createStore(reducerRaiz)


ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById('root')
)

registerServiceWorker()
