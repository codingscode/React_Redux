import * as acaoTipos from './acaoTipos'


export const incremento = () => {
    return { type: acaoTipos.INCREMENTO }
}

export const decremento = () => {
    return { type: acaoTipos.DECREMENTO }
}

export const adic = (valor) => {
    return { type: acaoTipos.ADIC, valor: valor }
}

export const subtr = (valor) => {
    return { type: acaoTipos.SUBTR, valor: valor }
}


