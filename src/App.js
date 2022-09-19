import logo from './logo.svg';
import './App.css';
import Age from './Components/formData/age';
import EmailAdress from './Components/formData/emailAdress';
import FirstName from './Components/formData/firstName';
import Nationality from './Components/formData/nationality';
import SecondName from './Components/formData/secondName';
import Table from './Components/Table'


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
      <div className='container'>
        <Table/>
      <Age/>
    <EmailAdress/>
    <FirstName/>
    <Nationality/>
    <SecondName/>
      </div>   
    </div>
  );
}

export default App;

