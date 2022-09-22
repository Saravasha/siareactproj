import TableBuilder from './Components/Table';
import Form from './Components/Form';
import React, { useState } from "react";
import './App.css';
import RemoveCharacter from './Components/RemoveCharacter';
import HandleSubmit from './Components/HandleSubmit';
function App() {

const [characters = []] = useState(0);
// removeCharacter = index => {
//     const { characters } = this.state;

//     this.setState({
//         characters: characters.filter((character, i) => { 
//             return i !== index;
//         })
//     });
// }

// handleSubmit = character => {
//     this.setState({characters: [...this.state.characters, character]});
// }

// render() {
    
    const { characters: [] } = this.state;
    const empty = 0;
    
    if (characters.length !== empty) {
      return (
          <div className="App">
            <div className="container">
              <h1>Siareactproj</h1>
              <p>List ov dudes app.</p>
              <TableBuilder
                
                characterData={characters}
                removeCharacter={RemoveCharacter(this.state)} /> 
              <h4>Add more Users</h4>
              <Form handleSubmit={HandleSubmit(this.state)} />
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
              <Form handleSubmit={HandleSubmit(this.state)} />
          </div>
        </div>
        )
      }
    }
  
// }
export default App;