import React, { useState} from 'react';


export default function Form(props) {

    const [state, setState] = useState({
        age: "",
        emailAdress: "",
        firstName: "",
        nationality: "",
        secondName: "",
    });
 
    // state = useState;

    const handleChange = (event) => {
        const { name, value} = event.target;
    
        setState({
                [name]: value,
            });
        }
        
    const onFormSubmit = (event) => {
        event.preventDefault();
            
        props.handleSubmit(setState);
        setState(props);
    }

    const { age, emailAdress, firstName, nationality, secondName } = useState(); 

    return (
                <form className='container' onSubmit={onFormSubmit}>
                <label htmlFor='age'>
                    <input
                        type="number"
                        steps="any"
                        name="age"
                        id="age"
                        value={age}
                        placeholder='Age'
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='emailAdress'>
                    <input
                        type="email"
                        name="emailAdress"
                        id="emailAdress"
                        value={emailAdress}
                        placeholder="Email Adress"
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='firstName'>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='nationality'>
                    <input
                        type="text"
                        name="nationality"
                        id="nationality"
                        value={nationality}
                        placeholder="Nationality"
                        onChange={handleChange}
                        required />
                </label>
                <label htmlFor='secondName'>
                    <input
                        type="text"
                        name="secondName"
                        id="secondName"
                        value={secondName}
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
