import TableBuilder from './Components/Table';
import Form from './Components/Form';
// import React, { useState } from "react";
import React, {Component} from 'react';
import './App.css';
// import RemoveCharacter from './Components/RemoveCharacter';
// import HandleSubmit from './Components/HandleSubmit';


class App extends Component {
  state = {
      characters: []
  };

  removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }

  render() {
      const { characters } = this.state;
      
    const empty = 0;
    
    if (characters.length !== empty) {
      return (
          <div className="App">
            <div className="container">
              <h1>Siareactproj</h1>
              <p>List ov dudes app.</p>
              <TableBuilder
                
                characterData={characters}
                removeCharacter={this.removeCharacter} /> 
              <h4>Add more Users</h4>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
      )} 
      else { 
        return (
          <div className="App">
            <div className="container">
              <h1>Siareactproj</h1>
              <p>There are no dudes, please add some if you wish to view them on the table.</p>
              <h4>Add a new User</h4>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
        )
      }
    }
  
}
export default App;