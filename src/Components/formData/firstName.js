import React, { Component } from 'react'
import Form from '../Form'
class FirstName extends Component {
  render() {
    return (
        <form>
        <label for='FirstName'>
          <input 
            type="text" 
            name="firstName"
            id='FirstName'
            placeholder='First Name'  
            required
            />
        </label>
      </form>
        )
    }
}

export default FirstName