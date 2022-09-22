import React, {useState} from "react";

function HandleChange(event) {
    const { name, value
    } = event.target;

    setState({
        [name]: value,
    });
};

export default HandleChange