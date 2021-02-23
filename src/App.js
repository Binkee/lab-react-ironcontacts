import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import ContactDetails from "./components/ContactDetails"
import React, { Component } from 'react'

export default class App extends Component {

    state = {
  
      contacts: contacts.slice(0,5)
    }

    handleSort = () => {
      console.log('Sort works')
      //always clone the arr before mutating it
      let ClonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

      ClonedContacts.sort((first, second) => {
          if (first.name > second.name) {
              return 1
          }
          else if (first.name < second.name) {
              return -1
          }
          else {
              return 0
          }
      })

      //always make sure you update the state so that it can re-render
      this.setState({
          contacts: ClonedContacts
      })
  }


  handleSortPop = () => {
    console.log('Sort works')
    //always clone the arr before mutating it
    let ClonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

    ClonedContacts.sort((first, second) => {
        if (first.popularity > second.popularity) {
            return 1
        }
        else if (first.popularity < second.popularity) {
            return -1
        }
        else {
            return 0
        }
    })

    //always make sure you update the state so that it can re-render
    this.setState({
        contacts: ClonedContacts
    })
}


    handleAdd = () => {
      let randomIndex = Math.floor(Math.random() * contacts.length )
      let randomContacts = contacts[randomIndex]

      this.setState({
          contacts: [...this.state.contacts, randomContacts]
      })

  }

  handleDelete = (contactId) =>{
    console.log(contactId)

    // filter all students that dont match that id
    let filteredContacts = this.state.contacts.filter((singleContact) => {
        return singleContact.id !== contactId
    })

    // make sure you update the state with the filtered students
    this.setState({
        contacts: filteredContacts
    })
}


  render() {
    
    return (
      
      <div>
        <h1>IronContacts </h1>
        <h3>Pictures</h3>
        <h3>Name</h3>
        <h3>Popularity</h3>
        <button onClick={this.handleSort} >Sort</button>
        <button onClick={this.handleSortPop} >Sort by Popularity</button>
        <button onClick={this.handleAdd} >Add</button>
        {this.state.contacts.map((singleContact, index)=>{
          return ( 
            <div> 
             <ContactDetails 
             name = {singleContact.name}
             popularity = {singleContact.popularity}
             picture = {singleContact.pictureUrl}
             id = {singleContact.id}
             onDelete={this.handleDelete}
             />
             
                  
           </div>

          )
           
        })}
        
      </div>
    )
  }
}




