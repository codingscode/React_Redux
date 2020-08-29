import React from 'react'

import './SaidaControle.css'

const saidaContador = (props) => (
    <div className={'SaidaContador'}>
        Contador Atual: {props.valor}
    </div>
)

export default saidaContador