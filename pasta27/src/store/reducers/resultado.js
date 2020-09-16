import * as acaoTipos from '../actions/acaoTipos'


const stateInicial = {
    contador: 0,
    resultados: []
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case acaoTipos.ARMAZENAR_RESULTADO:
            // Alterar dados
            return {
                ...state,
                resultados: state.resultados.concat({id: new Date(), valor: acao.resultado})
            }
        case acaoTipos.APAGAR_RESULTADO:
            const arrayAtualizada = state.resultados.filter(resultado => resultado.id !== acao.result_el_id)
            return {
              ...state,
              resultados: arrayAtualizada
            }
    }
    
    return state
}
 
export default reducer