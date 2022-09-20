import React, { Component } from 'react'
import Form from '../Form'

class Nationality extends Component {
  render() {
     return (
        <form>
        <label htmlFor='Nationality'>
          <input 
            type="text" 
            name="Nationality"
            id='Nationality'
            value={Form.nationality}
            placeholder='Nationality' 
            onChange={this.handleChange} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
        )
    }
}

export default Nationality