import React, { Component } from 'react'

class SecondName extends Component {
    render() {
        return (
        <form>
          <label>
            Second Name: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default SecondName