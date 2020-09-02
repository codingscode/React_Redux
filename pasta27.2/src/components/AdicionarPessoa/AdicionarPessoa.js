import React, { Component } from 'react'

import './AdicionarPessoa.css'

class AdicionarPessoa extends Component {

    state = { nome: '', idade: ''}

    tratarNomeAlterado = (evento) => {
        this.setState({nome: evento.target.value})
    }

    tratarIdadeAlterada = (evento) => {
        this.setState({idade: evento.target.value})
    }

     render() {
         return (
            <div className={'AdicionarPessoa'}>
                <input type="text" placeholder="Nome" onChange={this.tratarNomeAlterado} value={this.state.nome}/>
                <input type="number" placeholder="Idade" onChange={this.tratarIdadeAlterada} value={this.state.idade} />
                <button onClick={() => this.props.pessoaAdicionada(this.state.nome, this.state.idade)}>Adicionar Pessoa</button>
            </div>
         )
     }

}

export default AdicionarPessoa