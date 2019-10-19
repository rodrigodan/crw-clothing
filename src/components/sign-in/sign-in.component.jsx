import React from 'react';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../button-custom/button-custom.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handlesubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: '' })
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handlesubmit}>
                    
                    <FormInput 
                        name = "email" 
                        type = "email" 
                        handleChange = {this.handleChange} 
                        value = {this.state.email} 
                        label = "email"
                        required   
                    />

                    {/* <label>Email </label> */}

                    <FormInput 
                        name = "password" 
                        type = "password"
                        handleChange = {this.handleChange} 
                        value = {this.state.password} 
                        label = "password"
                        required     
                    />
                    
                    {/* <label>Password </label> */}
                    
                    <div className = 'buttons'>
                        <CustomButton type = "submit" > Sign In </CustomButton>
                        
                    
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> 
                            {''}
                            Sign In with Google{''} 
                        </CustomButton>
                    </div>
                </form> 
            </div>   
        );
    }
}

export default SignIn;