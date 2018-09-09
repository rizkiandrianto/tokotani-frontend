import React, { Component } from 'react';
import '../../css/component/common/sidebarmenu.css';
import {Nav, NavItem, Navbar, MenuItem, Glyphicon} from 'react-bootstrap';

export default class Sidebar extends Component {

    toggleSidebar(){
        console.log('clicked')
        var sidebar = document.getElementById('sidebar-menu')
        sidebar.classList.add('open');
    }

    logout() {
        localStorage.clear();
        window.location = '/';
    }

    render() {
        return (
            <div id="sidebar-menu" className="sideBarMenuContainer">
                <Navbar fluid className="sidebar">

                    <Navbar.Header>
                        <img className="logo" src={`/${'images/TokoTani-White_Icon.png'}`}  />
                        <img className="textlogo" src={`/${'images/TokoTani-White_Text.png'}`} />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="/petani/penjualan" eventKey={1}><img className="images" src={`/${'images/penjualan.svg'}`}/><span className="none">Penjualan</span></NavItem>
                            <NavItem href="/petani/pesan" eventKey={2}><img className="images" src={`/${'images/pesan.svg'}`}/><span className="none">Pesan</span></NavItem>
                            <NavItem href="/petani/penjualan" eventKey={3}><img className="images" src={`/${'images/nego.svg'}`}/><span className="none">Negosiasi</span></NavItem>
                            <NavItem eventKey={4}><img className="images" src={`/${'images/mitra.svg'}`}/><span className="none">Mitra</span></NavItem>
                            <NavItem href="/petani/transpenjualan" eventKey={5}><img className="images" src={`/${'images/transaksiPenjualan.svg'}`}/><span className="none">Transaksi Penjualan</span></NavItem>
                            <NavItem eventKey={6}><img className="images" src={`/${'images/transaksiPembelian.svg'}`}/><span className="none">Transaksi Pembelian</span></NavItem>
                            <NavItem href="/petani/hubungiKami" eventKey={7}><img className="images" src={`/${'images/hubungiKami.svg'}`}/><span className="none">Hubungi Kami</span></NavItem>
                            <NavItem eventKey={7} onClick={this.logout}><img className="images" src={`/${'images/right-arrow.svg'}`}/><span className="none">Logout</span></NavItem>
                            <NavItem eventKey={7} onClick={this.toggleSidebar}><img className="images" src={`/${'images/right-arrow.svg'}`}/><span className="none">Tutup</span></NavItem>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }
}
