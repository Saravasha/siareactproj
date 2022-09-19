import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Email Adress</th>
            <th>First Name</th>
            <th>Nationality</th>
            <th>Second Name</th>
          </tr>
        </thead>
        <tbody>
          <tr> {/* row 1 */}
            <td>Charlie</td>
            <td>Janitor</td>
            <td>Gerpgork</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table