import React, { Component } from 'react'

import Contador from './containers/Contador/Contador'
import './App.css'

class App extends Component {
    render() {
        return (
          <div className={'App'}>
              <Contador />
          </div>
        )
    }
}

export default App
