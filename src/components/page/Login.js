import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import '../../css/component/login.css';


export default class Login extends Component {
	constructor(props){
        super(props)
        autoBind(this)

        this.state = {
            username: '',
            pin: '',
        }
    }

   	handleSubmit(){
   		console.log('clicked')
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
                                    value={this.state.username}
                                    required="true"/><br/>

                                    <input
                                    className="add-paddword form-input"
                                    type="password"
                                    placeholder="Kata Sandi"
                                    ref="password"
                                    value={this.state.password} 
                                    required="true"/><br/>
                                    
                                    <div className="block-checkbox">
                                        <input type="checkbox" id="remember" />
                                        <label className="remember-me" htmlFor="remember">Ingat Saya</label>
                                    </div>
                                    <Link to="/petani/penjualan">
                                   	    <button type="submit" className="button-primary btn-red">Masuk</button>
                                    </Link>
                                </form>
                            </div>
                                <Link to="/lupapassword">
                                    <p className="forgot-password"><a href="">Lupa Kata Sandi?</a></p>
                                </Link>                    
                        </div>
                    </div>
                    
                </div>
            </div>
		)
	}
}