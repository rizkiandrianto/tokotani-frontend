import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/component/login.css';
import helpers from '../../helpers';
import axios from 'axios';

const { Request } = helpers;

export default class Login extends Component {
	constructor(props){
        super(props)

        this.state = {
            email: 'ivan@gmail.com',
            pw: 'ivan123',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

   	handleSubmit(e){
        e.preventDefault();
        Request.post('/masuk', {
            ...this.state
        })
        .then(res => {
            const data = res.data[0];
            localStorage.setItem('tokotani_login', res.data[0])
            this.props.history.push('/petani/penjualan')
        })
        .catch(err => {
            alert('error login');
        })
    }

    changeHandler(name) {
        return (e) => {
            this.setState({
                [name]: e.target.value
            });
        }
    }

	render (){
		return(
			<div className="login-comp">
                <div className="container-login">
                    <div className="box-form-login">
                        <div className="content">
                            <div className="box-typeface-image">
                                <img className="typeface-image" src="./images/TokoTani.png" />
                            </div>
                            <p className="title">Selamat Datang di TokoTani.com</p>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <input
                                        className="add-username form-input"
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        ref="username"
                                        value={this.state.email}
                                        required="true"
                                        onChange={this.changeHandler('email')}
                                    /><br/>

                                    <input
                                        className="add-paddword form-input"
                                        type="password"
                                        placeholder="Kata Sandi"
                                        ref="password"
                                        value={this.state.pw}
                                        required="true"
                                        onChange={this.changeHandler('pw')}
                                    /><br/>

                                    <div className="block-checkbox">
                                        <input type="checkbox" id="remember" />
                                        <label className="remember-me" htmlFor="remember">Ingat Saya</label>
                                    </div>
                                    <button type="submit" className="button-primary btn-red">Masuk</button>
                                </form>
                            </div>
                                <p className="forgot-password">
                                    <Link  to="/lupapassword">
                                    Lupa Kata Sandi?
                                    </Link>
                                </p>
                        </div>
                    </div>

                </div>
            </div>
		)
	}
}
