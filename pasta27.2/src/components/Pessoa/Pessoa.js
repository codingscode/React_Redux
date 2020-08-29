import React from 'react'

import './Pessoa.css'

const pessoa = (props) => (
    <div className={'Pessoa'} onClick={props.clicado}>
        <h1>{props.nome}</h1>
        <p>Idade: {props.idade}</p>
    </div>
)

export default pessoa