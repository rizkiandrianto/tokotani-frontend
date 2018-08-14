import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../../css/component/lupaPassword.css';

export default class lupakatasandi extends Component {
	constructor(props){
        super(props)
        autoBind(this)

        this.state = {
            email: '',
        }
    }

   	handleSubmit(){
   		console.log('clicked')
   	}

	render (){
		return(
			<div className="lupapassword-comp">
                <div className="container-lupapassword">
                    <div className="box-form-lupapassword">
                        <div className="content">
                            <div className="box-typeface-image">
                                <img className="typeface-image" src="./images/TokoTani.png" />
                            </div>
                            <p className="title">Lupa Kata Sandi</p>
                            <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                    className="add-username form-input"
                                    name="email"
                                    type="text"
                                    placeholder="E-mail"
                                    ref="email"
                                    value={this.state.email}
                                    required="true"/><br/>
                                    
                                   	<button type="submit" className="button-primary btn-red">Kirim</button>
                                </form>
                            </div>
        
                        </div>
                    </div>
                    
                </div>
            </div>
		)
	}
}