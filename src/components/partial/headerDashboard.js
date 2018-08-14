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
                                <div>{this.props.title}</div>
                             </Link> 
                        :
                            <div>{this.props.title}</div>
                        }
                    </div>
                    
                <div className="box-menu">
                    <div className="box-notification header-icon">
                        <Link to="/admin/edit-akun">
                            <img src={ this.state.settingActive ? `/${'images/icon/header/notif.svg'}` : `/${'images/icon/header/notif.svg'}` } />
                         </Link>    
                    </div>

                <div className="headerDashboard">Notifikasi</div>
                <div className="box-cart header-icon" onClick={this.handleLogout}>
                     <img src={`/${'images/icon/header/cart.svg'}`} />
                </div>
                <div className="headerDashboard">Keranjang</div>
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
