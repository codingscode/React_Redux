import React, { Component } from 'react'

import Contador from './containers/Contador/Contador'
import classes from './App.css'

class App extends Component {
    render() {
        return (
          <div className={classes.App}>
              <Contador />
          </div>
        )
    }
}

export default App
