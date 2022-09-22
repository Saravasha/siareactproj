import React, { Component } from 'react'
class SecondName extends Component {
    render() {
        return (
        <form>
        <label for='SecondName'>
          <input 
            type="text" 
            name="secondName"
            id='SecondName'
            placeholder='Second Name'  
            required
            />
        </label>
      </form>
        )
    }
}

export default SecondName