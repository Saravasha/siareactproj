import React, {useState} from "react";

function HandleSubmit(character) {
    this.setState({characters: [...this.state.characters, character]});
}

export default HandleSubmit