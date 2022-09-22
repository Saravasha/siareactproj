import React from 'react';
import Table from 'react-bootstrap/Table';

const TableHeader = () => { 
    return (
        <thead className='theader'>
            <tr>
              <th>Age</th>
              <th>Email Adress</th>
              <th>First Name</th>
              <th>Nationality</th>
              <th>Second Name</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.age}</td>
                <td> {row.emailAdress} </td>
                <td>{row.firstName}</td>
                <td> {row.nationality}</td>
                <td> {row.secondName} </td>
                <td><button class="btn btn-danger" onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const TableBuilder = (props) => {

    const { characterData, removeCharacter } = props;
        return (
            <Table striped bordered hover>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </Table>
        );
}

export default TableBuilder;