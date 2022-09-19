import React, { Component } from 'react'

class Nationality extends Component {
  render() {
     return (
        <form>
          <label>
            Nationality: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default Nationality