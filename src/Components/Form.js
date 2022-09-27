import React, { useState} from 'react';

export default function Form({handleSubmit}) {

    const [state, setState] = useState({
    age: '',
    emailAdress: '',
    firstName: '',
    nationality: '',
    secondName:''});

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
        
        };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    
        handleSubmit(state);
        setState(state);
    }
        
    return (
            <form className='container' onSubmit={onFormSubmit}>
            <label htmlFor='age'>
                <input
                    type="number"
                    steps="any"
                    name="age"
                    id="age"
                    value={state.age}
                    placeholder='Age'
                    onChange={handleChange}
                    required />
            </label>
            <label htmlFor='emailAdress'>
                <input
                    type="email"
                    name="emailAdress"
                    id="emailAdress"
                    value={state.emailAdress}
                    placeholder="Email Adress"
                    onChange={handleChange}
                    required />
            </label>
            <label htmlFor='firstName'>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={state.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    required />
            </label>
            <label htmlFor='nationality'>
                <input
                    type="text"
                    name="nationality"
                    id="nationality"
                    value={state.nationality}
                    placeholder="Nationality"
                    onChange={handleChange}
                    required />
            </label>
            <label htmlFor='secondName'>
                <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    value={state.secondName}
                    placeholder="Second Name"
                    onChange={handleChange}
                    required />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
