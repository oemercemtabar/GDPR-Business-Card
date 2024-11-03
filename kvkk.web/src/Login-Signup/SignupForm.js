import React, { useEffect, useState, TextField } from 'react';
import Select from 'react-select';
import Inputfield from "../Login-Signup/inputField";
import SubmitButton from "./SubmitButton";

import SubmitButton2 from "./SubmitButton2";
import "./oldApp_login_signup2.css";
import history from "../components/history";

import { CloseButton } from '../Controls/CloseButton';

class SignUpForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            kurum: '',
            birim: '',
            password: '',
            buttonDisabled: false,
            confirmPassword: '',
            kurumOptionList: [],
            birimOptionList: [],
            kurumid: '',
            birimid: ''
        }
        this.onInputchange = this.onInputchange.bind(this);
    }

    componentDidMount() {
        this.loginUiInitialize();
        
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        this.createRol();
        this.doSignUp();
    }

    onInputchange(property,val) {
        this.setState({
            [property]: val
            
        });
        
        
    }
    createRol() {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'ad': "kullanici",
            }

        }

        try {
            console.log(`${this.state.email}/${this.state.password}`);

            fetch(`https://localhost:44381/api/Rol/yeni-rol-ekleme`, settings)
                .then(res => {
                    res.json().then(data => {
                        if (data) {
                            let resultKullanici = data;
                            console.log(resultKullanici);
                            
                        }
                    })
                })
                .catch(err => console.log(err));


        } catch (e) {
            console.log(e);
            return e;
        }
    }


    async loginUiInitialize() {
        const settings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try {
            fetch(`https://localhost:44381/api/Kurum/butun-kurumlar`, settings)
                .then(res => res.json())
                .then(result =>
                    this.setState(
                        {
                            kurumOptionList: result.map(function (kurum) { return { value: kurum.id, label: kurum.adi } })
                        }
                    ));
                
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async BirimloginUiInitialize(kurumId) {
        const url = `https://localhost:44381/api/Birim/kurum-id-butun-birimler?kurumid=${kurumId}`;
        const BirimSettings = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
            
        };
        try {
            fetch(url, BirimSettings)
                .then(res => res.json())
                .then(result =>
                    this.setState(
                        {
                            birimOptionList: result.map(function (birim) { return { value: birim.id, label: birim.ad } })
                        }
                    ));

        } catch (e) {
            console.log(e);
            return e;
        }
    }

    resetForm() {
        this.setState({
            name: '',
            surname: '',
            email: '',
            phone: '',
            kurum: '',
            birim: '',
            password: '',
            buttonDisabled: false,
            confirmPassword: '',
            kurumOptionList: [],
            birimOptionList: [],
            kurumid: '',
            birimid: ''
        })
    }
    routeChange() {
        let path = "/sign-in";
        this.props.history.push(path);
    }

     doSignUp() {
        if (!this.state.name) {
            alert("Lutfen isminizi giriniz");
        }
        else if (!this.state.email) {
            alert("Lutfen mailinizi giriniz");
        }
        else if (!this.state.password) {
            alert("Lütfen sifrenizi giriniz");
        }
        else if (!this.state.confirmPassword) {
            alert("Lutfen sifrenizi onaylayiniz");
        }
        else if (this.state.password !== this.state.confirmPassword) {
            alert("Sifreler eslesmiyor");
        }
        

        const settings2 = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'ad': this.state.name,
                'soyad': this.state.surname,
                'telefon': this.state.phone,
                'eposta': this.state.email,
                'sifre': this.state.password,
                'kurumid': this.state.kurumid,
                'birimid': this.state.birimid,
                'password': this.state.password,
                'aktifmi': true,
                'silindimi': false
            })
        };

      
        
        try {
            fetch(`https://localhost:44381/api/Kullanici/yeni-kullanici-ekleme`, settings2)
                .then(res => {
                    res.json().then(data => {
                        if (data) {
                            let resultKullanici = data;
                            console.log(resultKullanici);
                            this.routeChange();
                        }
                    })
                })
                .catch(err => console.log(err));
            //if (fetchResponse2.ok) {
            //    this.history.push("/sign-in");
            //}

            //else {
            //    if (fetchResponse2.status === 400) {
            //        //this.resetForm();
            //        alert("Giriş yaptığınız bilgileri kontrol ediniz!");
            //    }
            //    else {
            //        alert("Bir hata oluştu!");
            //    }
            //}

        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async goLogin() {
        history.push("/sign-in");
    }

    render() {
        return (
            <div className='form-container'>
                <span className='close-btn'>
                    <CloseButton buttonStyle='close-btn'>X</CloseButton>
                </span>
                <div className='form-content-left'>
                    <img className='form-img' src='images/bbb.png' alt='spaceship' />
                </div>
                <div className="page-one-bg">
                    <div className="inner">
                        <div className="loginForm">
                            <h1> Kayıt Ol</h1>
                            <form onSubmit={this.handleSubmitLogin.bind(this)}>
                                <label className="label2">
                                    <span>Isim</span>

                                    <Inputfield
                                        type='text'
                                        value={this.state.name ? this.state.name : ''}
                                        onChange={(val) => this.onInputchange('name', val)}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Soyisim</span>
                                    <Inputfield
                                        
                                        type='name'
                                        value={this.state.surname ? this.state.surname : ''}
                                        onChange={(val) => this.onInputchange('surname', val)}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Eposta Adresi</span>

                                    <Inputfield
                                        type='text'
                                       
                                        value={this.state.email ? this.state.email : ''}
                                        onChange={(val) => this.onInputchange('email', val)}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Telefon</span>

                                    <Inputfield
                                        type='text'

                                        value={this.state.phone ? this.state.phone : ''}
                                        onChange={(val) => this.onInputchange('phone', val)}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Kurum</span>

                                    <Select
                                        options={this.state.kurumOptionList}
                                        onChange={(val) => {
                                            this.onInputchange('kurumid', val.value)
                                            this.onInputchange('kurum', val.label)
                                            this.BirimloginUiInitialize(val.value);
                                        }}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Birim</span>

                                    <Select
                                        options={this.state.birimOptionList}
                                        onChange={(val) => {
                                            this.onInputchange('birimid', val.value)
                                            this.onInputchange('birim', val.label)
                                        }}
                                    />
                                </label>



                                <label className="label2">
                                    <span>Sifre</span>

                                    <Inputfield
                                        type='password'

                                        value={this.state.password ? this.state.password : ''}
                                        onChange={(val) => this.onInputchange('password', val)}
                                    />
                                </label>
                                <label className="label2">
                                    <span>Sifre Tekrar</span>

                                    <Inputfield
                                        type='password'
                                        value={this.state.confirmPassword ? this.state.confirmPassword : ''}
                                        onChange={(val) => this.onInputchange('confirmPassword', val)}
                                    />
                                </label>

                                <div className="action-btn" >
                                    <SubmitButton

                                        text='Hesap Yarat'
                                        disabled={this.state.buttonDisabled}
                                        onClick={() => this.doSignUp()}
                                    />


                                    <SubmitButton2

                                        text='Hesabiniz var mi? Giris yapin.'
                                        disabled={this.state.buttonDisabled}
                                        onClick={() => this.goLogin()}
                                    />

                                </div>

                            </form>
                        </div>
                        <div className="photo">
                            <img src="../images/bbb.png" alt="asja" />
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default SignUpForm;