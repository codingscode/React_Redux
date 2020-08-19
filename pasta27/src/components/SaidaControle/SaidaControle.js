import React from 'react'

import classes from './SaidaControle.css'

const saidaContador = (props) => (
    <div className={classes.SaidaContador}>
        Contador Atual: {props.valor}
    </div>
)

export default saidaContador