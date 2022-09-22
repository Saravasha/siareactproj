import React, { useState } from 'react';
import OnFormSubmit from './OnFormSubmit';
import HandleChange from './HandleChange';


function Form ()   {
    
    // handleChange = event => {
    //     const { name, value
    //     } = event.target;
    
    //     this.setState({
        //         [name]: value,
        //     });
        // };
        
        // onFormSubmit = (event) => {
            //     event.preventDefault();
            
    //     this.props.handleSubmit(this.state);
    //     this.setState(this.initialState);
    // };

    // const [age,emailAdress,firstName,nationality,secondName] = useState(0);


    // this.state = useState(0);
    // this.initialState = {
    //     age: '',
    //     emailAdress: '',
    //     firstName: '',
    //     nationality: '',
    //     secondName: ''
    // };
        
            this.state = this.initialState;
            // render()  {
                
                const { age, emailAdress, firstName, nationality, secondName } = useState(0);
                
                return (
                    <form className='container' onSubmit={OnFormSubmit}>
                    <label htmlFor='age'>
                        <input
                            type="number"
                            steps="any"
                            name="age"
                            id="age"
                            value={age}
                            placeholder='Age'
                            onChange={HandleChange}
                            required />
                    </label>
                    <label htmlFor='emailAdress'>
                        <input
                            type="email"
                            name="emailAdress"
                            id="emailAdress"
                            value={emailAdress}
                            placeholder="Email Adress"
                            onChange={HandleChange}
                            required />
                    </label>
                    <label htmlFor='firstName'>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            placeholder="First Name"
                            onChange={HandleChange}
                            required />
                    </label>
                    <label htmlFor='nationality'>
                        <input
                            type="text"
                            name="nationality"
                            id="nationality"
                            value={nationality}
                            placeholder="Nationality"
                            onChange={HandleChange}
                            required />
                    </label>
                    <label htmlFor='secondName'>
                        <input
                            type="text"
                            name="secondName"
                            id="secondName"
                            value={secondName}
                            placeholder="Second Name"
                            onChange={HandleChange}
                            required />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            );
        }
    // }

export default Form;