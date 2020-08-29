import React, { Component } from 'react'
import { connect } from 'react-redux'

import Pessoa from '../components/Pessoa/Pessoa'
import AdicionarPessoa from '../components/AdicionarPessoa/AdicionarPessoa'
import * as acaoTipos from '../store/actions'

class Pessoas extends Component {
    
    render () {
        return (
            <div>
                <AdicionarPessoa pessoaAdicionada={this.props.emPessoaAdicionada} />
                {this.props.prs.map(cada => (
                    <Pessoa key={cada.id} nome={cada.nome} idade={cada.idade} 
                        clicado={() => this.props.emPessoaRemovida(cada.id)}/>
                ))}
            </div>
        )
    }
}

const mapStateParaProps = state => {
    return {
        prs: state.pessoas
    }
}

const mapDispatchParaProps = dispatch => {
    return {
        emPessoaAdicionada: () => dispatch({type: acaoTipos.ADIC_PESSOA}),
        emPessoaRemovida: (id) => dispatch({type: acaoTipos.REMOVER_PESSOA, idPessoa: id})
    }
}

export default connect(mapStateParaProps, mapDispatchParaProps)(Pessoas)