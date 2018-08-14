import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from 'react-router-dom';
import '../../../css/component/chat.css';
import io from 'socket.io-client'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Tab, Tabs} from 'react-bootstrap'
import Cookie from 'react-cookie'
import Header from '../../partial/headerDashboard'
import Sidebar from '../../partial/Sidebar';


export default class transPenjualan extends Component{
constructor (props) {
    super(props)
    this.state = { messages: [] }
  }

  componentDidMount () {
    this.socket = io('/')
    this.socket.on('message', message => {
      this.setState({ messages: [message, ...this.state.messages] })
    })
  }

  handleSubmit = event => {
    const body = event.target.value
    if (event.keyCode === 13 && body) {
      const message = {
        body,
        from: 'Me'
      }
      this.setState({ messages: [message, ...this.state.messages] })
      this.socket.emit('message', body)
      event.target.value = ''
    }
  }
render() {
  return (
<div>
        <Header title="Hubungi Kami" />
        <Header/>
        <Sidebar/>
        <div className="box-table table-penjualan">
        </div>         
<div id="frame">
  <div id="sidepanel">
    <div id="profile">
      <div class="wrap">
        <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
        <p>Ivan Pradana</p>
        <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
        <div id="status-options">
          <ul>
            <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
            <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
            <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
            <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
          </ul>
        </div>
        <div id="expanded">
          <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
          <input name="twitter" type="text" value="mikeross" />
          <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
          <input name="twitter" type="text" value="ross81" />
          <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
          <input name="twitter" type="text" value="mike.ross" />
        </div>
      </div>
    </div>
    <div id="search">
      <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
      <input type="text" placeholder="Search contacts..." />
    </div>
    <div id="contacts">
      <ul>
        <li class="contact">
          <div class="wrap">
            <span class="contact-status online"></span>
            <img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
            <div class="meta">
              <p class="name">Irfan Jafar</p>
              <p class="preview">Mas Mau Order</p>
            </div>
          </div>
        </li>
        <li class="contact active">
          <div class="wrap">
            <span class="contact-status busy"></span>
            <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
            <div class="meta">
              <p class="name">Simon Marito</p>
              <p class="preview">Barangnya Bagus kok, Semoga puas</p>
            </div>
          </div>
        </li>
        
      </ul>
    </div>
    
  </div>
  <div class="content">
    <div class="contact-profile">
      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
      <p>Simon Marito</p>
    </div>
    <div class="messages">
      <ul>
        <li class="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>Mas mau tanya apa pupuk tebu robustanya ready stok?</p>
        </li>
        <li class="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>Hai Simon, untuk pupuk robustanya sedang ready kok!</p>
        </li>
        <li class="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>Yeay Seneng Deh</p>
        </li>
        <li class="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>Iya</p>
        </li>
        <li class="sent">
          <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
          <p>Saya sudah order ya mas, tolong diproses</p>
        </li>
        <li class="replies">
          <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
          <p>Iya</p>
        </li>
      </ul>
    </div>
    <div class="message-input">
      <div class="wrap">
      <input type="text" placeholder="Tuliskan Pesan Anda..." onKeyUp={this.handleSubmit} />
      <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
      <button class="submit">Kirim</button>
      </div>
    </div>
  </div>
</div>
</div>


    )
}
}