import TableBuilder from './Components/Table';
import Form from './Components/Form';
import React, {useState} from 'react';
import './App.css';


const App = () =>  {
  const [characters, setCharacters] = useState([]);
 

 const removeCharacter = (index) => {
   
   
  
    setCharacters({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
  }

  const handleSubmit = (character) => {
    setCharacters({characters: [...characters, character]});
  }

  // render() {
    
      
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
              <h4>Add more Users</h4>
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
              <h4>Add a new User</h4>
              <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
        )
      }
    }
  
// }
export default App;