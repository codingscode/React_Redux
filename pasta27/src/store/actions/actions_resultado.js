import * as acaoTipos from './acaoTipos'


export const salvarResultado = (res) => {
    //const resultadoAtualizado = res * 2
    return { type: acaoTipos.ARMAZENAR_RESULTADO, resultado: res }
}

export const armazenar_resultado = (resultado) => {
    return (dispatch, getState) => {
        setTimeout(() => {
           const contadorAntigo = getState().cont.contador
           console.log('*', contadorAntigo)
           dispatch(salvarResultado(resultado))
        }, 2000)
    }
    
}

export const apagar_resultado = (id_res) => {
    return { type: acaoTipos.APAGAR_RESULTADO, result_el_id: id_res }
}