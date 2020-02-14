import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: "Ons", age: "25" },
      { name: "Safa", age: "24" },
      { name: "Fadwa", age: "29" }
    ]

  }

  switchNameHandler = () => {
    console.log('button cliked !!')


    this.setState({
      persons: [
        { name: 'Ahmed', age: '22' },
        { name: 'Mohamed', age: '23' },
        { name: 'Rami', age: '23' }
      ]
    })
    // do not use this
    // this.state.persons=[
    //   { name: 'Ahmed', age: '22' },
    //     { name: 'Mohamed', age: '23' },
    //     { name: 'Rami', age: '23' }
    // ]


  }



  render() {

    return (
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello React!!'))

      <div className="App">
        <h1 >Hello React !!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    )
  }

}


export default App