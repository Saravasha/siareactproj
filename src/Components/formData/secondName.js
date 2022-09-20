import React, { Component } from 'react'
import Form from '../Form'

class SecondName extends Component {
    render() {
        return (
        <form>
        <label htmlFor='SecondName'>
          <input 
            type="text" 
            name="SecondName"
            id='SecondName'
            value={Form.secondName}
            placeholder='Second Name' 
            onChange={Form.this.handleChange} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

export default SecondName