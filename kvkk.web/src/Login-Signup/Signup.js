import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback } from 'reactstrap';
import isEmail from 'validator/lib/isEmail';

import SubmitButton2 from "./SubmitButton2";

import "./oldApp_login_signup2.css";


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }
    getInitialState = () => ({
        data: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            kurum: '',
            birim: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    });
    handleClick = e => {
        this.props.history.push("/login");
    };
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.isim === '') errors.isim = 'Isim kısmını doldurunuz.';
        if (data.soyisim === '') errors.soyisim = 'Soyisim kısmını doldurunuz.';
        if (!isEmail(data.email)) errors.email = 'Eposta adresi dogru degil.';
        if (data.email === '') errors.email = 'Eposta kismini doldurunuz.';
        if (data.phone === '') errors.phone = 'Telefon kismini doldurunuz.';
        if (data.birim === '') errors.birim = 'Birim kismini doldurunuz.';
        if (data.phone === '') errors.phone = 'Telefon kismini doldurunuz.';
        if (data.password === '') errors.password = 'Sifre gecerli degil.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Sifreler eslesmiyor';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();
        /*
        if (Object.keys(errors).length === 0) {
            //console.log(data);
            //Call an api here
            //Resetting the form
            const url = "http://localhost:8080/register/addUser";
            Axios.post(url, {
                mobile: data.phonenumber,
                email: data.email,
                password: data.password,
                name: data.name,
            })
                .then(res => { this.props.history.push("/login") })
                .catch(error => {
                    return error;
                });

            //this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
        */
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div className="page-one-bg">
                <div className="inner">
                    <div className="loginForm">
                        <h1> Sign Up </h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <label className="label2">
                                    <span>Isim</span>
                                    <div className="inputField">
                                        <input className='input2' id="isim" value={data.isim} invalid={errors.isim ? true : false} name="isim" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.isim}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>Soyisim</span>
                                    <div className="inputField">
                                        <input className='input2' id="soyisim" value={data.soyisim} invalid={errors.soyisim ? true : false} name="soyisim" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.soyisim}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>E-post Adresi</span>
                                    <div className="inputField">
                                        <input className='input2' id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.email}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>Telefon</span>
                                    <div className="inputField">
                                        <input className='input2' id="phone" value={data.phone} invalid={errors.phone ? true : false} name="phone" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.phone}</FormFeedback>
                                </label>
                            </FormGroup>
                            <FormGroup>
                                <label className="label2">
                                    <span>Kurum</span>
                                    <div className="inputField">
                                        <input className='input2' id="kurum" value={data.kurum} invalid={errors.kurum ? true : false} name="kurum" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.kurum}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>Birim</span>
                                    <div className="inputField">
                                        <input className='input2' id="birim" value={data.birim} invalid={errors.birim ? true : false} name="birim" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.birim}</FormFeedback>
                                </label>
                            </FormGroup>
                            
                            <FormGroup>
                                <label className="label2">
                                    <span>Password</span>
                                    <div className="inputField">
                                        <input className='input2' id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.password}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>Password-Again</span>
                                    <div className="inputField">
                                        <input className="input2" id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.confirmPassword}</FormFeedback>
                                </label>
                            </FormGroup>
                            <div className="action-btn" >
                                <button className='btn2 primary' type='submit'>Create Account</button>
                                <SubmitButton2

                                    text='Hesabiniz var mi? Giris yapin.'
                                    disabled={this.state.buttonDisabled}
                                    type="link"
                                    onClick={this.handleClick}
                                />
                            </div>
                        </Form>
                        <div className="photo">
                            <img src="../src/images/bbb.png" alt="asja" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;