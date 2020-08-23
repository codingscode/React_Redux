const stateInicial = {
    contador: 0,
    resultados: []
}
 
const reducer = (state = stateInicial, acao) => {
    switch(acao.type) {
        case 'INCREMENTO':
            return {
                contador: state.contador + 1
            }
        case 'DECREMENTO':
            return {
                contador: state.contador - 1
            }
        case 'ADIC':
            return {
                contador: state.contador + acao.valor
            }
        case 'SUBTR':
            return {
                contador: state.contador - acao.valor
            }
    }
    
    return state
}
 
export default reducer