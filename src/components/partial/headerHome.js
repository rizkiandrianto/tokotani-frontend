import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import '../../css/component/common/header.css';

export default class Header extends Component{
    constructor(props){
        super(props)

        autoBind(this)

        this.state = {
            settingActive: false
        }
    }
	render() {
		return (
		  
			   <div className="header-comp">
                <div className="header-container">
                    <div className="box-title">
                        { this.props.backprogram === "true" ?
                            <Link to={this.props.link}>
                                <img src={`/${'images/icon/button_icon/back_icon.svg'}`}/>
                                <p>{this.props.title}</p>
                             </Link> 
                        :
                            <p>{this.props.title}</p>
                        }
                    </div>
                    
                    <div className="box-menu">
                    <div className="box-notification header-icon">
                            <Link to="/admin/edit-akun">
                                <img src={ this.state.settingActive ? `/${'images/icon/header/notif-white.svg'}`  } />
                             </Link>    
                        </div>
                        <div className="headerHome">Notifikasi</div>
                        <div className="box-cart header-icon" onClick={this.handleLogout}>
                            <img src={`/${'images/icon/header/cart-white.svg'}`} />
                        </div>
                        <div className="headerHome">Keranjang</div>
                        <div className="box-user">
                            <div className="box-img-user">
                                <img src={`/${'images/user-img.jpeg'}`} />
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
			  
		
		);
	}
}
