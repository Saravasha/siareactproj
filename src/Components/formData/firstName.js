import React, { Component } from 'react'

class FirstName extends Component {
  render() {
    return (
        <form>
            <label>
            First Name: 
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default FirstName