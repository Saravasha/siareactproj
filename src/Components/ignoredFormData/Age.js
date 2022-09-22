import React, { Component } from 'react'
import Form from '../Form'

class Age extends Component {
  constructor(props) {
    super(props);
    
    this.initialState = {
        age: '2',
        emailAdress: '',
        firstName: '',
        nationality: '',
        secondName: ''
    };

    this.state = this.initialState;
}

handleChange = event => {
    const { name, value 
    } = event.target;

    this.setState({
        [name] : value,
    });
}

onFormSubmit = (event) => {
    event.preventDefault();
    
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}
  render() {

    const {age} = this.state; 
    return (
      <label for="age">
      <input 
          type="number"
          steps="any" 
          name="age" 
          id="age"
          value={age}
          placeholder='Age' 
          onChange={this.handleChange} 
      />
  </label>
    )
  }
}

export default Age