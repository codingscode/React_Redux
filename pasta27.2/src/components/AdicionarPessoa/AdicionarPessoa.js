import React from 'react'

import './AdicionarPessoa.css'

const adicionarPessoa = (props) => (
    <div className={'AdicionarPessoa'}>
        <button onClick={props.pessoaAdicionada}>Adicionar Pessoa</button>
    </div>
)

export default adicionarPessoa