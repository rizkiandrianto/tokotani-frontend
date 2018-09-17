import React, { Component }  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, ControlLabel, FormControl, ButtonGroup, Button, ButtonToolbar, MenuItem, Table  } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import Header from '../../partial/headerDashboard'
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';
export default class hubungiKami extends Component{
  constructor(props){
        super(props)
        autoBind(this)

        this.state = {
            //username: '',
            pin: '',
        }
    }

    handleSubmit(){
      console.log('clicked')
    }
render() {

        return (
        <div>
        <Header title="Hubungi Kami" />
        <Header/>  
        <Sidebar/>
        
        <div className="box-table table-penjualan">
            <div className="box-top row-flex flex-space">
              <p className="judul-pertanyaan">Silahkan Masukkan Keluhan atau Laporan</p>
           </div>
        <br/>  
        <div className="row-flex col-2">
        <br/>
            <FormControl className="textarea" placeholder="Masukkan Judul Pertanyaan" required="true"  />
          <select 
            className="dropdown form-input dropdownHubungikami"
              value={this.state.user} onChange={(event) => this.setState({user: event.target.value})}>                                    
                <option value="10">Kategori</option>
                <option value="20">Pembelian</option>
                <option value="30">Penjualan</option>
                <option value="40">Pengiriman</option>
          </select>
          <br/>
          </div>
          <br/>
          <div className="row-flex col-2">
             <FormControl className="textarea" placeholder="Masukkan Deskripsi Pertanyaan" required="true"/>
             {/* <button type="submit" className="button-secondary btn-red-dash">Upload Gambar</button> */}    
           </div>
          <div>
        </div>  
        <br/><br/>
        <div className="row-flex col-2">
        <button type="submit" className="button-primary btn-red-dash">Kirim</button> 
        <button type="submit" className="button-secondary btn-red-dash">Batal</button>     
        </div> 
        </div> 
        
         </div> 

              )
      }
}