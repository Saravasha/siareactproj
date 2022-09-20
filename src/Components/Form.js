// import React, { Component } from 'react'

// class Form extends Component {
//   initialState = {
//     age: '',
//     emailAdress: '',
//     firstName: '',
//     nationality: '',
//     secondName: '',
//   }  
//   state = this.initialState

//   handleChange = (event) => {
//     const {[age, value} = event.target
//     const {emailAdress, value} = event.target
//     const {firstName, value} = event.target
//     const {nationality, value} = event.target
//     const {secondName, value} = event.target
    
//     this.setState({
//       [age]: value,
//       [emailAdress]: value,
//       [firstName]: value,
//       [nationality]: value,
//       [secondName]: value,
//     })
//   }

//   submitForm = () => {
//     this.props.handleSubmit(this.state)
//     this.setState(this.initialState)
//   }

//   render() {
//     const {name, job} = this.state;
//     return (
//       <div className='container'>
//         <Age/>
//         <EmailAdress/>
//         <FirstName/>
//         <Nationality/>
//         <SecondName/>
//         <input type="button" value="Submit" onClick={this.submitForm}/>
//       </div>
//     );
//   }
// }
//   // render() {
//   //     return (
//   //       <div className='container'>
//   //           <Age/>
//   //           <EmailAdress/>
//   //           <FirstName/>
//   //           <Nationality/>
//   //           <SecondName/>
//   //       </div>
//   //     )
//   //   }
//   // }
  
//   export default Form



  import React, {Component} from 'react';
  import Age from './formData/Age'
import EmailAdress from './formData/EmailAdress'
import FirstName from './formData/FirstName'
import Nationality from './formData/Nationality'
import SecondName from './formData/SecondName'


class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            job: '',
            age: '',
            emailAdress: '',
            firstName: '',
            nationality: '',
            secondName: ''

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job, age } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <Age onChange={this.handleChange} />
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                    type="text" 
                    name="job" 
                    id="job"
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;