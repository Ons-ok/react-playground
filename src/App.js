import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'


class App extends Component {
  state = {
    // persons: [
    //   { id: "789", name: "Ons", age: "25" },
    //   { id: "456", name: "Safa", age: "24" },
    //   { id: "123", name: "Fadwa", age: "29" }
    // ],
    // showPersons: true,
    // style: {
    //   color: 'blue'
    // }
    PersonListeA: [
      { id: "789", name: "Ons", age: "25" },
      { id: "456", name: "Safa", age: "24" },
      { id: "123", name: "Fadwa", age: "29" }
    ],
    PersonListeB: [],
    showPersons: true


  }


  deletePersonHundler = (person) => {
    console.log("person deleted")
    // const newPerson = [...this.state.persons]
    // const index = newPerson.findIndex(item => {
    //   return item.id === id
    // })

    // newPerson.splice(index, 1)
    // this.setState({
    //   persons: newPerson
    // })

    const newPersonListeA = [...this.state.PersonListeA]
    const newPersonListeB = [...this.state.PersonListeB]
    const index1 = newPersonListeA.indexOf(person)
    const index2 = newPersonListeB.indexOf(person)
    if (index1 !== -1) {
      newPersonListeA.splice(index1, 1)
      this.setState({ PersonListeA: newPersonListeA })
    }
    else {
      newPersonListeB.splice(index2, 1)
      this.setState({ PersonListeB: newPersonListeB })
    }

  }

  // deletePersonHundler = () => {
  //   console.log("person deleted")
  //   const newPerson = [...this.state.persons]
  //   newPerson.splice(0, 1)
  //   this.setState({
  //     persons: newPerson
  //   })

  // }

  changeNameHandler = (event, person) => {
    console.log('change name handler')
    //const newPerson = [...this.state.persons]
    // const index = newPerson.findIndex(item => {
    // return item.id === id
    //})
    //newPerson[index].name = event.target.value
    //this.setState({
    //  persons: newPerson
    //})
    const newPersonListeA = [...this.state.PersonListeA]
    const newPersonListeB = [...this.state.PersonListeB]
    const index1 = newPersonListeA.indexOf(person)
    const index2 = newPersonListeB.indexOf(person)

    if (index1 !== -1) {
      newPersonListeA[index1].name = event.target.value
      this.setState({ PersonListeA: newPersonListeA })

    }
    else {
      newPersonListeB[index2].name = event.target.value
      this.setState({ PersonListeB: newPersonListeB })
    }






  }



  // changeNameHandler = (event) => {
  //   console.log('change name handler')
  //   const newPerson = [...this.state.persons]



  //   newPerson[0].name = event.target.value
  //   this.setState({
  //     persons: newPerson
  //   })
  // }









  // switchNameHandler = () => {
  //   console.log('button cliked !!')
  //   const newPerson = [...this.state.persons]
  //   newPerson[0].name = "Ahmed"
  //   this.setState({
  //     persons: newPerson
  //   })
  toggelPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  ChangePlaceHundler = (person) => {

    const newPersonListeA = [...this.state.PersonListeA]
    const newPersonListeB = [...this.state.PersonListeB]
    // const index = newPersonListeA.indexOf(person)
    const index1 = newPersonListeA.indexOf(person)
    const index2 = newPersonListeB.indexOf(person)



    if (index1 !== -1) {
      newPersonListeB.push(newPersonListeA[index1])
      newPersonListeA.splice(index1, 1)
      this.setState({
        PersonListeA: newPersonListeA,
        PersonListeB: newPersonListeB
      })
    }
    else {
      newPersonListeA.push(newPersonListeB[index2])
      newPersonListeB.splice(index2, 1)
      this.setState({
        PersonListeA: newPersonListeA,
        PersonListeB: newPersonListeB

      })

    }
  }

  changeColorHandler = () => {
    console.log('change color handler')
    this.setState({
      style: {

        color: 'purple'
      }
    })

  }

  //this.setState({
  //persons: [
  //{ name: 'Ahmed', age: '22' },
  //{ name: 'Mohamed', age: '23' },
  //{ name: 'Rami', age: '23' }
  //]
  //})
  // do not use this
  // this.state.persons=[
  //   { name: 'Ahmed', age: '22' },
  //     { name: 'Mohamed', age: '23' },
  //     { name: 'Rami', age: '23' }
  // ]


  // }


  builList = (personsList) => {

    return (
      <div style={this.state.style}>
        {personsList.map(person => {
          return <Person
            changeList={() => { this.ChangePlaceHundler(person) }}

            name={person.name}
            age={person.age}
            changed={(event) => { this.changeNameHandler(event, person) }}
            delete={() => { this.deletePersonHundler(person) }}

            //deleted={() => { this.deletePersonHundler(person.id) }}
            key={person.id} />
        })}
      </div>

    )



  }


  render() {
    let PersonListeA = null
    let PersonListeB = null
    if (this.state.showPersons) {
      PersonListeA = this.builList(this.state.PersonListeA)
      PersonListeB = this.builList(this.state.PersonListeB)


    }

    // let PersonComponent = null
    // if (this.state.showPersons)
    // PersonComponent = (
    //   <div style={this.state.style}>
    //     {this.state.persons.map(item => {
    //       return <Person
    //         name={item.name}
    //         age={item.age}
    //         changed={(event) => { this.changeNameHandler(event, item.id) }}
    //         deleted={() => { this.deletePersonHundler(item.id) }}
    //         key={item.id} />

    //     }
    //     )
    //     }

    //   </div>
    // )





    return (
      // React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello React!!'))

      <div className="App">
        <h1 >Hello React !!</h1>
        <button onClick={this.toggelPersonsHandler}>Toggel persons</button>
        <button onClick={this.changeColorHandler}>Change color</button>

        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <h2>Liste A</h2>
            {PersonListeA}
          </div>

          <div style={{ width: '50%' }}>
            <h2>Liste B</h2>
            {PersonListeB}
          </div>
        </div>

        {/* {PersonComponent} */}


        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
          changed={this.changeNameHandler}
          deleted={this.deletePersonHundler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}

      </div>
    )
  }

}


export default App