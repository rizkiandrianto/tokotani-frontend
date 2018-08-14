import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import '../../css/component/gantikatasandi.css';


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
			<div className="gantikatasandi-comp">
                <div className="container-gantikatasandi">
                    <div className="box-form-gantikatasandi">
                        <div className="content">
                            <div className="box-typeface-image">
                                <img className="typeface-image" src="./images/TokoTani.png" />
                            </div>
                            <p className="title">Ubah Kata Sandi</p>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                    className="add-username form-input"
                                    name="katasandilama"
                                    type="password"
                                    placeholder="Kata Sandi Baru"
                                    ref="katasandilama"
                                    value={this.state.passwordlama}
                                    required="true"/><br/>

                                    <input
                                    className="add-paddword form-input"
                                    type="password"
                                    placeholder="Ulangi Kata Sandi"
                                    ref="katasandibaru"
                                    value={this.state.password} 
                                    required="true"/><br/>
                                    
                                    <Link to="/login">
                                   	    <button type="submit" className="button-primary btn-red">Masuk</button>
                                    </Link>
                                </form>
                            </div>                
                        </div>
                    </div>
                    
                </div>
            </div>
		)
	}
}