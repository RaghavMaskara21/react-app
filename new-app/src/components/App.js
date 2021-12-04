import React, { Component } from 'react'
import Header from './Bootstrap/header';



 class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Raghav</h1>
        <Header>Raghav's new app</Header>
         <Header dark={true}>Raghav's new app</Header>
      </div>
    )
  }
}
export default App;