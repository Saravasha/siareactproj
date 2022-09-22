import React, {useState} from "react";

function OnFormSubmit(event) {
    event.preventDefault();

    props.HandleSubmit(useState);
    SetState(this.initialState);
};

export default OnFormSubmit;