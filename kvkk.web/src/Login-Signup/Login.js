import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback } from 'reactstrap';
import isEmail from 'validator/lib/isEmail';
import "./oldApp_login_signup.css";



class Login extends Component {
    constructor(props) {
        super(props);


        this.state = this.getInitialState();
    }
    getInitialState = () => ({

        data_signin: {
            email: '',
            password: '',
        },
        errors: {},

    });
    handleClick = e => {
        this.props.history.push("/signup");
    };
    handleChange = (e) => {
        this.setState({
            data_signin: {
                ...this.state.data_signin,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data_signin } = this.state;
        let errors = {};
        if (!isEmail(data_signin.email)) errors.email = 'Email must be valid.';
        if (data_signin.email === '') errors.email = 'Email can not be blank.';
        if (data_signin.password === '') errors.password = 'Password must be valid.';

        return errors;
    }


    handleForget = e => {
        this.props.history.push("/forget");
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { data_signin } = this.state;

        const errors = this.validate();

        /*
        if (Object.keys(errors).length === 0) {
            const url = "http://localhost:8080/login";
            if (data_signin.email === "product_manager@bookstore.com") {
                //console.log("BURDAYIM")
                Axios.post(url, {
                    email: data_signin.email,
                    password: data_signin.password,
                    where: "W",
                })
                    .then(res => {
                        //console.log(res)
                        if (res.status === 200) {
                            UserStore.isLoggedIn = true;
                            UserStore.email = data_signin.email;
                            UserStore.userId = res.data;
                            SetBasket(res.data);
                            //console.log("PRODUCT")
                            this.props.history.push("/p");
                        }
                        else {
                            if (res.status === 400) {
                                this.resetForm();
                                alert("Wrong e-mail or password!");
                            }
                            else {
                                alert("Something went wrong!");
                            }
                        }

                    })
                    .catch((error) => {
                        console.log(error);
                        alert("Wrong e-mail or password!");
                    })

            }
            else if (data_signin.email === "sales_manager@bookstore.com") {
                Axios.post(url, {
                    email: data_signin.email,
                    password: data_signin.password,
                    where: "W",
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                })
                    .then(res => {
                        //console.log(res)
                        if (res.status === 200) {
                            UserStore.isLoggedIn = true;
                            UserStore.email = data_signin.email;
                            UserStore.userId = res.data;
                            SetBasket(res.data);
                            //console.log("SALES")
                            this.props.history.push("/s");
                        }
                        else {
                            if (res.status === 400) {
                                this.resetForm();
                                alert("Wrong e-mail or password!");
                            }
                            else {
                                alert("Something went wrong!");
                            }
                        }

                    }).catch((error) => {
                        console.log(error);
                        alert("Wrong e-mail or password!");
                    })
            }
            else {
                Axios.post(url, {
                    email: data_signin.email,
                    password: data_signin.password,
                    where: "W",
                })
                    .then(res => {
                        //console.log(res)
                        if (res.status === 200) {
                            UserStore.isLoggedIn = true;
                            UserStore.email = data_signin.email;
                            UserStore.userId = res.data;
                            SetBasket(res.data);
                            this.props.history.push("/");
                        }
                        else {
                            if (res.status === 400) {
                                this.resetForm();
                                alert("Wrong e-mail or password!");
                            }
                            else {
                                alert("Something went wrong!");
                            }
                        }

                    }).catch((error) => {
                        console.log(error);
                        alert("Wrong e-mail or password!");
                    })
            }
            
        } else {
            this.setState({ errors });
        }
        */
        this.props.history.push("/dashboard");
    }

    render() {
        const { data_signin, errors } = this.state;
        return (
            <div className="page-one-bg">
                <div className="inner">
                    <div className="loginForm2">
                        <h1> Giris Yap </h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <label className="label2">
                                    <span>E-posta Adresi</span>
                                    <div className="inputField">
                                        <input className='input2' id="email" value={data_signin.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.email}</FormFeedback>
                                </label>
                            </FormGroup>

                            <FormGroup>
                                <label className="label2">
                                    <span>Sifre</span>
                                    <div className="inputField">
                                        <input className='input2' id="password" value={data_signin.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                                    </div>
                                    <FormFeedback className="invalid">{errors.password}</FormFeedback>
                                </label>
                            </FormGroup>
                            <div className="action-btn" >
                                <button className='btn3 primary' type='submit'>Giris Yap</button>
                            </div>
                        </Form>
                    </div>
                </div>


            </div>

        );
    }
}

export default Login;