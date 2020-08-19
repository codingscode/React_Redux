
const redux = require('redux')
const criarStore = redux.createStore

const stateInicial = {
    contador: 0
}

// Reducer
const reducerRaiz = (state = stateInicial, action) => {
    return state
}


// Store
const armazenar = criarStore(reducerRaiz)
console.log(armazenar.getState()) // undefined antes, { contador: 0 } depois

// Dispatching Action


// Subscription


