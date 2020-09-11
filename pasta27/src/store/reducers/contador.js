import * as acaoTipos from '../actions/actions'


const stateInicial = {
    contador: 0
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case acaoTipos.INCREMENTO:
            const novoState = Object.assign({}, state)
            novoState.contador = state.contador + 1
            return novoState
        case acaoTipos.DECREMENTO:
            return {
                ...state,
                contador: state.contador - 1
            }
        case acaoTipos.ADIC:
            return {
                ...state,
                contador: state.contador + acao.valor
            }
        case acaoTipos.SUBTR:
            return {
                ...state,
                contador: state.contador - acao.valor
            }
    }
    
    return state
}
 
export default reducer