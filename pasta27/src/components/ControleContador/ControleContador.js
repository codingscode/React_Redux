import React from 'react'

import classes from './ControleContador.css'

const controleContador = (props) => (
    <div className={classes.ControleContador} onClick={props.clicado}>
        {props.rotulo}
    </div>
)

export default controleContador