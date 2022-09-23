import React, { Component } from 'react';
// import OnFormSubmit from './OnFormSubmit';
// import HandleChange from './HandleChange';



class Form extends Component {
    constructor(props) {
        super(props);
 
 
    this.initialState = {
        age: '',
        emailAdress: '',
        firstName: '',
        nationality: '',
        secondName: ''
    };
 
    this.state = this.initialState;
}
    handleChange = event => {
        const { name, value} = event.target;
    
        this.setState({
                [name]: value,
            });
        }
        
    onFormSubmit = (event) => {
        event.preventDefault();
            
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    // const [age,emailAdress,firstName,nationality,secondName] = useState(0);


render() {
    const { age, emailAdress, firstName, nationality, secondName } = this.state; 

    return (
                    <form className='container' onSubmit={this.onFormSubmit}>
                    <label htmlFor='age'>
                        <input
                            type="number"
                            steps="any"
                            name="age"
                            id="age"
                            value={age}
                            placeholder='Age'
                            onChange={this.handleChange}
                            required />
                    </label>
                    <label htmlFor='emailAdress'>
                        <input
                            type="email"
                            name="emailAdress"
                            id="emailAdress"
                            value={emailAdress}
                            placeholder="Email Adress"
                            onChange={this.handleChange}
                            required />
                    </label>
                    <label htmlFor='firstName'>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                            required />
                    </label>
                    <label htmlFor='nationality'>
                        <input
                            type="text"
                            name="nationality"
                            id="nationality"
                            value={nationality}
                            placeholder="Nationality"
                            onChange={this.handleChange}
                            required />
                    </label>
                    <label htmlFor='secondName'>
                        <input
                            type="text"
                            name="secondName"
                            id="secondName"
                            value={secondName}
                            placeholder="Second Name"
                            onChange={this.handleChange}
                            required />
                    </label>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            );
        }
    }

export default Form;