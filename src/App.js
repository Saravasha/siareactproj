import TableBuilder from './Components/Table';
import Form from './Components/Form';

import React, {useState} from 'react';
import './App.css';
// import RemoveCharacter from './Components/RemoveCharacter';
// import HandleSubmit from './Components/HandleSubmit';


export default function App() {
  
  const [state, setState] = useState({characters: []}); 

  const removeCharacter = (index) => {
      const { characters } = state;
  
      setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  const handleSubmit = (character) => {
      setState({characters: [...state.characters, character]});
  }


      const { characters } = state;
      
    const empty = 0;
    
    if (characters.length !== empty) {
      return (
          <div className="App">
            <div className="container">
              <h1>Siareactproj</h1>
              <p>List ov dudes app.</p>
              <TableBuilder
                
                characterData={characters}
                removeCharacter={removeCharacter} /> 
              <h4>Add more Dudes</h4>
              <Form handleSubmit={handleSubmit} />
          </div>
        </div>
      )} 
      else { 
        return (
          <div className="App">
            <div className="container">
              <h1>Siareactproj</h1>
              <p>There are no dudes, please add some if you wish to view them on the table.</p>
              <h4>Add a new Dude</h4>
              <Form handleSubmit={handleSubmit} />
          </div>
        </div>
        )
      }
    }
  
