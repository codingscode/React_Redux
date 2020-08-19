
const redux = require('redux')
const criarStore = redux.createStore

// Reducer
const reducerRaiz = (state, action) => {
    return state
}


// Store
const armazenar = criarStore(reducerRaiz)
console.log(armazenar.getState())

// Dispatching Action


// Subscription


