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
                <ControleContador rotulo="Decremento" clicado={this.props.emDecrementoContador}  />
                <ControleContador rotulo="Adicionar 10" clicado={this.props.emAdicionarContador}  />
                <ControleContador rotulo="Subtrair 15" clicado={this.props.emSubstrairContador}  />
                <hr />
                <button onClick={this.props.emArmazenarResultado}>Armazenar Resultado</button>
                <ul>
                    {this.props.resultadosArmazenados.map(cada => (
                        <li key={cada.id} onClick={this.props.emApagarResultado}>{cada.valor}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateParaProps = state => {
    return {
       cont: state.contador,
       resultadosArmazenados: state.resultados
    }
}

const mapDispatchParaProps = dispatch_param => {
    return {
       emIncrementoContador: () => dispatch_param({type: 'INCREMENTO'}),
       emDecrementoContador: () => dispatch_param({type: 'DECREMENTO'}), 
       emAdicionarContador: () => dispatch_param({type: 'ADIC', valor: 10}), 
       emSubstrairContador: () => dispatch_param({type: 'SUBTR', valor: 15}),
       emArmazenarResultado: () => dispatch_param({type: 'ARMAZENAR_RESULTADO'}),  
       emApagarResultado: () => dispatch_param({type: 'APAGAR_RESULTADO'})
    }
}

export default connect(mapStateParaProps, mapDispatchParaProps)(Contador)