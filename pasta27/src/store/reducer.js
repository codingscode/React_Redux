const stateInicial = {
    contador: 0,
    resultados: []
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case 'INCREMENTO':
            const novoState = Object.assign({}, state)
            novoState.contador = state.contador + 1
            return novoState
        case 'DECREMENTO':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'ADIC':
            return {
                ...state,
                contador: state.contador + acao.valor
            }
        case 'SUBTR':
            return {
                ...state,
                contador: state.contador - acao.valor
            }
        case 'ARMAZENAR_RESULTADO':
            return {
                ...state,
                resultados: state.resultados.concat(state.contador)
            }
    }
    
    return state
}
 
export default reducer