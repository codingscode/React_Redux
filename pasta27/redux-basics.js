
const redux = require('redux')
const criarStore = redux.createStore

const stateInicial = {
    contador: 0
}

// Reducer
const reducerRaiz = (state = stateInicial, action) => {
    if (action.type === 'INC_CONTADOR') {
        return {
            ...state, contador: state.contador + 1
        }
    }
    if (action.type === 'ADIC_CONTADOR') {
        return {
            ...state, contador: state.contador + action.valor
        }
    }
    return state
}


// Store
const armazenar = criarStore(reducerRaiz)
console.log(armazenar.getState()) // undefined antes, { contador: 0 } depois

// Dispatching Action
armazenar.dispatch({type: 'INC_CONTADOR'})
armazenar.dispatch({type: 'ADIC_CONTADOR', valor: 10})
console.log(armazenar.getState())  // saida: { contador: 11 } 

// Subscription


