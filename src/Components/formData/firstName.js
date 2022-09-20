import React, { Component } from 'react'
import Form from '../Form'
class FirstName extends Component {
  render() {
    return (
        <form>
        <label htmlFor='FirstName'>
          <input 
            type="text" 
            name="FirstName"
            id='FirstName'
            value={Form.firstName}
            placeholder='First Name' 
            onChange={this.handleChange} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

export default FirstName