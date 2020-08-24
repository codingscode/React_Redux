import * as acaoTipos from './actions'


const stateInicial = {
    contador: 0,
    resultados: []
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
        case acaoTipos.ARMAZENAR_RESULTADO:
            return {
                ...state,
                resultados: state.resultados.concat({id: new Date(), valor: state.contador})
            }
        case acaoTipos.APAGAR_RESULTADO:
            //const id = 2
            //const novoArray = [...state.resultados]
            //novoArray.splice(id, 1)
            //const arrayAtualizada = state.resultados.filter((resultado, indice) => indice !== id)
            const arrayAtualizada = state.resultados.filter(resultado => resultado.id !== acao.result_el_id)
            return {
              ...state,
              resultados: arrayAtualizada
            }
    }
    
    return state
}
 
export default reducer