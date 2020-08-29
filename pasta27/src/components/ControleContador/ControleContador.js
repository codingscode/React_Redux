import React from 'react'

import './ControleContador.css'

const controleContador = (props) => (
    <div className={'ControleContador'} onClick={props.clicado}>
        {props.rotulo}
    </div>
)

export default controleContador