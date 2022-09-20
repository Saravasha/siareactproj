// import logo from './logo.svg';
// import './App.css';
// import React , { Component } from 'react';
// import Table from './Components/Table'
// import Form from './Components/Form';


// class App extends Component {
//   state = {
//     characters: [
//       {
//         name: 'Charlie',

//       },
//     ],
  
//   }

//   handleSubmit = (character) => {
//     this.setState({ characters: [...this.state.characters, character] })
//   }

//   removeCharacter = (index) => {
//     const { characters } = this.state

//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index
//       }),
//     })
//   }

//   render() {
//     const characters = [
//       {
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//             >
//             Learn React
//           </a>
//         </header>
//         <div className='container'>
//           <Table characterData={characters} removeCharacter={this.removeCharacter} />
//           <Form handleSubmit={this.handleSubmit}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';

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
      if (this.state.characters == undefined) 
      {

        /* if empty block*/
        return <div>empty bois here</div>
      }
        const { characters } = this.state;
        
        return (
          <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                  
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
            </div>
        );
    }
}

export default App;