export const INCREMENTO = 'INCREMENTO'
export const DECREMENTO = 'DECREMENTO'
export const ADIC = 'ADIC'
export const SUBTR = 'SUBTR'
export const ARMAZENAR_RESULTADO = 'ARMAZENAR_RESULTADO'
export const APAGAR_RESULTADO = 'APAGAR_RESULTADO'

export const incremento = () => {
    return { type: INCREMENTO }
}

export const decremento = () => {
    return { type: DECREMENTO }
}

export const adic = (valor) => {
    return { type: ADIC, valor: valor }
}

export const subtr = (valor) => {
    return { type: SUBTR, valor: valor }
}

export const salvarResultado = (res) => {
    return { type: ARMAZENAR_RESULTADO, resultado: res }
}

export const armazenar_resultado = (resultado) => {
    return dispatch => {
        setTimeout(() => {
           dispatch(salvarResultado(resultado))
        }, 2000)
    }
    
}

export const apagar_resultado = (id_res) => {
    return { type: APAGAR_RESULTADO, result_el_id: id_res }
}
