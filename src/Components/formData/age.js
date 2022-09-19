import React, { Component } from 'react'

class Age extends Component {
  render() {
    return (
    <form>
  <label>
    Age: 
    <input type="number" name="name" required/>
  </label>
  <input type="submit" value="Submit" />
</form>
    )
  }
}

export default Age