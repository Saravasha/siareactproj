import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import Table from './Components/Table';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
    
    characters = useState(0);

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
    const { characters } = this.state;
    const empty = 0;

    if (characters.length != empty) {
      return (
          <div className="App">
            <div className="container">
              <h1>React Tutorial</h1>
              <p>Add a character with a name and a job to the table.</p>
              <Table
                
                characterData={characters}
                removeCharacter={this.removeCharacter} /> 
              <h3>Add New</h3>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
      );
      } 
      else { 
        return (
          <div className="App">
            <div className="container">
              <h1>React Tutorial</h1>
              <p>There are no characters added, please add some if you wish to view them on the table.</p>
              <h3>Add New</h3>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
        )
      }
  
  }


export default App;