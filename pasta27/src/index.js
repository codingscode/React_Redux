import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


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

const comporPotenciadores = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducerRaiz, comporPotenciadores(applyMiddleware(logador, thunk)))


ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById('root')
)

registerServiceWorker()
