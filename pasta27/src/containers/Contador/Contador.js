import React, { Component } from 'react'
import { connect } from 'react-redux'

import ControleContador from '../../components/ControleContador/ControleContador'
import SaidaContador from '../../components/SaidaControle/SaidaControle'

class Contador extends Component {
    
    state = {
        contador: 0
    }

    tratarMudancaContador = ( acao, valor ) => {
        switch ( acao ) {
            case 'inc':
                this.setState( ( prevState ) => { return { contador: prevState.contador + 1 } } )
                break
            case 'dec':
                this.setState( ( prevState ) => { return { contador: prevState.contador - 1 } } )
                break
            case 'adic':
                this.setState( ( prevState ) => { return { contador: prevState.contador + valor } } )
                break
            case 'subt':
                this.setState( ( prevState ) => { return { contador: prevState.contador - valor } } )
                break
        }
    }

    render () {
        return (
            <div>
                <SaidaContador valor={this.props.cont} />
                <ControleContador rotulo="Incremento" clicado={this.props.emIncrementoContador} />
                <ControleContador rotulo="Decremento" clicado={() => this.tratarMudancaContador( 'dec' )}  />
                <ControleContador rotulo="Adicionar 5" clicado={() => this.tratarMudancaContador( 'adic', 5 )}  />
                <ControleContador rotulo="Subtrair 5" clicado={() => this.tratarMudancaContador( 'subt', 5 )}  />
            </div>
        )
    }
}

const mapStateParaProps = state => {
    return {
       cont: state.contador
    }
}

const mapDispatchParaProps = dispatch_param => {
    return {
       emIncrementoContador: () => dispatch_param({type: 'INCREMENTO'}),
       emDecrementoContador: () => dispatch_param({type: 'DECREMENTO'}), 
       emAdicionarContador: () => dispatch_param({type: 'ADIC', valor: 10}), 
       emSubstrairContador: () => dispatch_param({type: 'SUBTR', valor: 15})  
    }
}

export default connect(mapStateParaProps, mapDispatchParaProps)(Contador)