import React, { Component } from 'react'
import Form from '../Form'

class EmailAdress extends Component {
  render() {
    return (
    <form>
    <label htmlFor='EmailAdress'>
      <input 
        type="text" 
        name="EmailAdress"
        id='EmailAdress'
        value={Form.emailAdress}
        placeholder='Email Adress' 
        onChange={this.handleChange} 
        />
    </label>
    <input type="submit" value="Submit" />
  </form>
    )
  }
}

export default EmailAdress