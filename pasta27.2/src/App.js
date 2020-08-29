import React, { Component } from 'react'

import Pessoas from './containers/Pessoas'

class App extends Component {
    render() {
        return (
          <div className={'App'}>
              <ol>
                  <li>Torne este app em um que NÃO use estado local (em componentes) mas invés use Redux</li>
              </ol>
              <Pessoas />
          </div>
        )
    }
}

export default App
