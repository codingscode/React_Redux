import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import contadorReducer from './store/reducers/contador'
import resultadoReducer from './store/reducers/resultado'

const reducerRaiz = combineReducers({
    cont: contadorReducer,
    resultado: resultadoReducer
})

const logador = store => {
    return proximo => {
        return acao => {
           console.log('[Middleware] Despachando', acao)
           const resultado = proximo(acao)
           console.log('[Middleware] proximo state', store.getState())
           return resultado
        }
    }
}

const store = createStore(reducerRaiz, applyMiddleware(logador))


ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById('root')
)

registerServiceWorker()
