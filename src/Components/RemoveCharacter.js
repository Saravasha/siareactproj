import React, {useState} from "react";


function RemoveCharacter(index) {
    const { characters } = this.state;

    this.setState({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
    });
}

export default RemoveCharacter