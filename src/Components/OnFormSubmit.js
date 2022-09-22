import React, {useState} from "react";

function OnFormSubmit(event) {
    event.preventDefault();

    this.props.HandleSubmit(this.state);
    this.setState(this.initialState);
};

export default OnFormSubmit;