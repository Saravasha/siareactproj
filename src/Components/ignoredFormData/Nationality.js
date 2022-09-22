import React, { Component } from 'react'
import Form from '../Form'

class Nationality extends Component {
  render() {
     return (
        <form>
        <label for='Nationality'>
          <input 
            type="text" 
            name="nationality"
            id='Nationality'
            placeholder='Nationality'  
            required
            />
        </label>
      </form>
        )
    }
}

export default Nationality