import React, {useState} from "react";



const RemoveCharacter = (index)  => {

    const [characters, setCharacters] = useState();


    setCharacters({
        characters: characters.filter((character, i) => { 
            return i !== index;
        })
    });
}

export default RemoveCharacter