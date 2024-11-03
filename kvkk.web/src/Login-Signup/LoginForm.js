import React from 'react';
import Inputfield from "../Login-Signup/inputField";
import SubmitButton3 from "./SubmitButton3";
import "../Login-Signup/Form.css"
import "./oldApp_login_signup.css";
import history from '../components/history';
import { CloseButton } from '../Controls/CloseButton';


class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        buttonDisabled: false,
        canChangeRoute: false,
        rolOptionList: [],
        rol: ''
    };

    constructor(props) {
        super(props);

        this.routeChange = this.routeChange.bind(this);

    }

    handleSubmitLogin(e) {
        e.preventDefault();
        this.doLogin();
}

    setInputValue(property, val) {
        
        this.setState({
            [property]: val
        })
    }
    resetForm() {
        this.setState({
            email: '',
            password: '',
            buttonDisabled: false
        })
    }
    routeChange(rolid) {
        console.log(rolid);
        let path = "/adminreg";
        let path2 = "/admin";
        if (rolid == "dfa04cfa-886c-4699-8a7b-4bd7969045dd") {
            this.props.history.push(path);
        }
        else {
            this.props.history.push(path2);
        }
        
    }

    componentDidMount() {
        this.RolAPIInitialize();

    }
    async RolCheckAPI() {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try {
            fetch(`https://localhost:44381/api/Rol/id-ile-rol-bulma/id?id={kullanici.rolid}`, settings)
                .then(res => res.json())
                .then(result =>
                    this.setState.rol = result.ad
                    );
            console.log(this.state.rol);
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async RolAPIInitialize() {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try {
            fetch(`https://localhost:44381/api/Rol/butun-roller`, settings)
                .then(res => res.json())
                .then(result =>
                    this.setState(
                        {
                            rolOptionList: result
                        }
                    ));

        } catch (e) {
            console.log(e);
            return e;
        }
    }

    doLogin() {
        if (!this.state.email) {
            alert("Lütfen e-posta adresinizi giriniz.");
        }
        else if (!this.state.password) {
            alert("Lütfen şifrenizi giriniz");
        }
            
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
        }

        try {
            console.log(`${this.state.email}/${this.state.password}`);
            
            fetch(`https://localhost:44381/api/Kullanici/eposta-sifre-ile-kullanici/eposta-sifre?eposta=${this.state.email}&sifre=${this.state.password}`, settings)
                .then(res => {
                    res.json().then(data => {
                        if (data) {
                            let resultKullanici = data;
                            localStorage.setItem("kullanici", JSON.stringify(resultKullanici));
                            const kullaniciCheck = JSON.parse(localStorage.getItem('kullanici'));
                            
                            console.log(kullaniciCheck);
                            
                            this.routeChange(kullaniciCheck.rolid);
                        }
                    })                    
                })
                .catch(err => console.log(err));
           

        } catch (e) {
            console.log(e);
            alert("Lütfen e-posta adresinizi ve şifrenizi kontrol ediniz.");
            return e;
        }
        
    }
    

    goSignUp() {
        history.push("/signup");
    }

    render() {

        return (
            <div className='form-container'>
                <span className='close-btn'>
                    <CloseButton buttonStyle='close-btn'>X</CloseButton>
                </span>
                <div className='form-content-right'>
                    <img className='form-img' src='images/bbb.png' alt='spaceship' />
                </div>
                <div className="page-one-bg">
                    <div className="inner">
                        <div className="loginForm">
                            <h1> Giris Yap </h1>
                            <form onSubmit={this.handleSubmitLogin.bind(this)}>
                                <label className="label3">
                                    <span>E-posta Adresi</span>
                                    <Inputfield
                                        type='text'

                                        value={this.state.email ? this.state.email : ''}
                                        onChange={(val) => this.setInputValue('email', val)}
                                    />
                                </label>
                                <label className="label3">
                                    <span>Sifre</span>
                                    <Inputfield
                                        type='password'

                                        value={this.state.password ? this.state.password : ''}
                                        onChange={(val) => this.setInputValue('password', val)}
                                    />
                                </label>
                                <div className="action-btn2" >
                                    <SubmitButton3

                                        text='Giris Yap'
                                        disabled={this.state.buttonDisabled}

                                    />
                                </div>
                            </form>
                        </div>
                        <div className="photo">
                            <img src="../images/bbb.png" alt="asja" width="600px" height="600px" />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default LoginForm;