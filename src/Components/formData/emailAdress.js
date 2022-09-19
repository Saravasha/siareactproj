import React, { Component } from 'react'

class EmailAdress extends Component {
  render() {
    return (
    <form>
      <label>
        Email Adress: 
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default EmailAdress