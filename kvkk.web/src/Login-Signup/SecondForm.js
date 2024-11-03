import React, { useState } from 'react';
import '../Login-Signup/SecondForm.css';

import { CloseButton } from '../Controls/CloseButton';
import LoginForm from './LoginForm';

import Admin from '../layouts/Admin';
const SecondForm = () => {
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
                <div className='form-content-left'>
                    <img className='form-img' src='images/bbb.png' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <LoginForm submitForm={submitForm} />
                ) : (
                    <Admin />
                )}
            </div>
        </>
    );
};

export default SecondForm;