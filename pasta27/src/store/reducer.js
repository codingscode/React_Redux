const stateInicial = {
    contador: 0
}
 
const reducer = (state = stateInicial, acao) => {
    if (acao.type === 'INCREMENTO') {
        return {
           contador: state.contador + 1
        }
    }

    if (acao.type === 'DECREMENTO') {
        return {
           contador: state.contador - 1
        }
    }

    if (acao.type === 'ADIC') {
        return {
           contador: state.contador + 5
        }
    }

    if (acao.type === 'SUBTR') {
        return {
           contador: state.contador -5
        }
    }
    
    return state
}
 
export default reducer