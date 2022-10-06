import TableBuilder from './Table';
import Form from './Form';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';



export default function TableHandler() {
  
  // const [state, setState] = useState({characters: []}); 

  // const removeCharacter = (index) => {
  //     const { characters } = state;
  
  //     setState({
  //         characters: characters.filter((character, i) => { 
  //             return i !== index;
  //         })
  //     });
  // }

  // const handleSubmit = (character) => {
  //   setState({characters: [...state.characters, character]})  

  // }


  //     const {characters} = state;
      
  //   const empty = 0;
    
  //   if (characters.length !== empty) {
  //     return (
  //         <div>
  //           <div className="container">
  //             <h1>Siareactproj</h1>
  //             <p>List ov dudes app.</p>
  //             <TableBuilder
                
  //               characterData={characters}
  //               removeCharacter={removeCharacter} /> 
  //             <h4>Add more Dudes</h4>
  //             {/* <Form handleSubmit={handleSubmit} /> */}
  //         </div>
  //       </div>
  //     )} 
  //     else { 
  //       return (
  //         <div>
  //           <div className="container">
  //             <h1>Siareactproj</h1>
  //             <p>There are no dudes, please add some if you wish to view them on the table.</p>
  //             <h4>Add a new Dude</h4>
  //             <Link to="/Form">Form</Link>
  //             {/* <Form handleSubmit={handleSubmit} /> */}
  //         </div>
  //       </div>
  //       )
  //     }
    }
  
