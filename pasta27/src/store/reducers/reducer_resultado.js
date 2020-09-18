import * as acaoTipos from '../actions/acaoTipos'
import { atualizarObjeto } from '../utilitario'


const stateInicial = {
    contador: 0,
    resultados: []
}

const apagarResultado = (state, acao) => {
    const arrayAtualizada = state.resultados.filter(resultado => resultado.id !== acao.result_el_id)
    return atualizarObjeto(state, { resultados: arrayAtualizada })
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case acaoTipos.ARMAZENAR_RESULTADO:
            // Alterar dados
            return atualizarObjeto(state, { resultados: state.resultados.concat({id: new Date(), valor: acao.resultado}) })
        case acaoTipos.APAGAR_RESULTADO:
            return apagarResultado(state, acao)
            
    }
    
    return state
}
 
export default reducer