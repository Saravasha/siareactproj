import React, { Component } from 'react'
import Form from '../Form'

class Age extends Component {
  render() {
    return (
    // <form>
    <div>

      <label htmlFor='Age'>
        <input 
          type="number" 
          name="Age"
          id='Age'
          value={Form.age}
          placeholder='Age' 
          required/>
      </label>
      <input type="submit" value="Submit" />
      </div>
    // </form>
    )
  }
}

export default Age