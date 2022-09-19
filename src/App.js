import logo from './logo.svg';
import './App.css';

import './Components/formData/email-adress'
import './Components/formData/firstName'
import './Components/formData/nationality'
import './Components/formData/secondName'
import Age from './Components/formData/age';

function App() {
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
      <div className="Age">
        {Age}
        </div>
      <div className="Email_Adress"><p>Email Adress</p></div>
      <div className="FirstName"></div>
      <div className="Nationality"><p>Nationality</p></div>
      <div className="SecondName"><p>Second Name</p></div>
    </div>
  );
}

export default App;

