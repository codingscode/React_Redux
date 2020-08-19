import React, { Component } from 'react'

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
                <SaidaContador valor={this.state.contador} />
                <ControleContador rotulo="Incremento" clicado={() => this.tratarMudancaContador( 'inc' )} />
                <ControleContador rotulo="Decremento" clicado={() => this.tratarMudancaContador( 'dec' )}  />
                <ControleContador rotulo="Adicionar 5" clicado={() => this.tratarMudancaContador( 'adic', 5 )}  />
                <ControleContador rotulo="Subtrair 5" clicado={() => this.tratarMudancaContador( 'subt', 5 )}  />
            </div>
        )
    }
}

export default Contador