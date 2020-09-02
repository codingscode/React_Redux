import * as acaoTipos from './actions'

const stateInicial = {
    pessoas: []
}

const reducer = ( state = stateInicial, acao ) => {
    switch ( acao.type ) {
        case acaoTipos.ADIC_PESSOA:
            const novaPessoa = {
                id: Math.random(), // not really unique but good enough here!
                nome: acao.dadosPessoa.nome,
                idade: acao.dadosPessoa.idade
            }
            return {
                ...state,
                pessoas: state.pessoas.concat( novaPessoa )
            }
        case acaoTipos.REMOVER_PESSOA:
            return {
                ...state,
                pessoas: state.pessoas.filter(cada => cada.id !== acao.idPessoa)
            }
    }
    return state
}

export default reducer