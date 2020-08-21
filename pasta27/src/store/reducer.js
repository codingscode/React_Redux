const stateInicial = {
    contador: 0
}
 
const reducer = (state = stateInicial, acao) => {
    if (acao.type === 'INCREMENTO') {
        return {
           contador: state.contador + 1
        }
    }
    return state
}
 
export default reducer