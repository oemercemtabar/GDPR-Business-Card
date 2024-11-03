import React, { useState } from 'react';
import '../Login-Signup/Form.css';

import { CloseButton } from '../Controls/CloseButton';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>
                    <CloseButton buttonStyle='close-btn'>X</CloseButton>
                </span>
                {!isSubmitted ? (
                    <SignUpForm submitForm={submitForm} />
                ) : (
                    <LoginForm />
                )}
            </div>
        </>
    );
};

export default Form;