import React, { Component } from 'react'

class EmailAdress extends Component {
  render() {
    return (
    <form>
    <label for='EmailAdress'>
      <input 
        type="email" 
        name="emailAdress"
        id='EmailAdress'
        placeholder='Email Adress' 
        required/>
    </label>
  </form>
    )
  }
}

export default EmailAdress