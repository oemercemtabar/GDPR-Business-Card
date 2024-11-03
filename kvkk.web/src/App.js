import React from 'react';
import './App.css';
import Home from '../src/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Admin from '../src/layouts/Admin';
import SignUpForm from '../src/Login-Signup/SignupForm';
import LoginForm from '../src/Login-Signup/LoginForm'

import RegularPage from './layouts/RegularPage';


function App() {

    return (
        <Router>
            <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sign-in' component={LoginForm} />
                    <Route path='/sign-up' component={SignUpForm} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/adminreg" component={RegularPage}/>
            </Switch>
        </Router>

        
    );
}

export default App;