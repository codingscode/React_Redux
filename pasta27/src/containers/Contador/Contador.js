import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/indice'

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
                <button onClick={() => this.props.emArmazenarResultado(this.props.cont)}>Armazenar Resultado</button>
                <ul>
                    {this.props.resultadosArmazenados.map(cada => (
                        <li key={cada.id} onClick={() => this.props.emApagarResultado(cada.id)}>{cada.valor}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateParaProps = state => {
    return {
       cont: state.cont.contador,
       resultadosArmazenados: state.resultado.resultados
    }
}

const mapDispatchParaProps = dispatch_param => {
    return {
       emIncrementoContador: () => dispatch_param(actionCreators.incremento()),
       emDecrementoContador: () => dispatch_param(actionCreators.decremento()), 
       emAdicionarContador: () => dispatch_param(actionCreators.adic(10)), 
       emSubstrairContador: () => dispatch_param(actionCreators.subtr(15)),
       emArmazenarResultado: (resultado) => dispatch_param(actionCreators.armazenar_resultado(resultado)),  
       emApagarResultado: (id) => dispatch_param(actionCreators.apagar_resultado(id))
    }
}

export default connect(mapStateParaProps, mapDispatchParaProps)(Contador)