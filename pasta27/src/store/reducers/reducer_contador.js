import * as acaoTipos from '../actions/acaoTipos'
import { atualizarObjeto } from '../utilitario'

const stateInicial = {
    contador: 0
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case acaoTipos.INCREMENTO:
            return atualizarObjeto(state, { contador: state.contador + 1 })
        case acaoTipos.DECREMENTO:
            return atualizarObjeto(state, { contador: state.contador - 1 })
        case acaoTipos.ADIC:
            return atualizarObjeto(state, { contador: state.contador + acao.valor })
        case acaoTipos.SUBTR:
            return atualizarObjeto(state, { contador: state.contador - acao.valor })
            
    }
    
    return state
}
 
export default reducer