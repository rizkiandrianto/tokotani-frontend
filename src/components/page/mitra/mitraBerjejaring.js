import React, { Component }  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, InputGroup, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger  } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import { Link } from 'react-router-dom';
import Header from '../../partial/headerDashboard'
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';
export default class mitraberjejaring extends Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchTerms: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleBatal() {
    this.setState({ show: false });
  }

  handleSubmit() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: !this.state.true});
  }



  handleChange(e) {

    this.setState({
      searchTerms: e.target.value,
    });
  }


render() {
  function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}
  const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
        <div>
        <Header title="Penjualan" />
        <Header/>
        <Sidebar/>  
        
        <div className="box-table table-penjualan">
            <div className="box-top row-flex flex-space">
              <p className="count-item"> 1 Mitra</p>
           
          <select 
            className="dropdown form-input"
              value={this.state.user} onChange={(event) => this.setState({user: event.target.value})}>                                    
                <option value="10">10 Entri Per Halaman</option>
                <option value="20">20 Entri Per Halaman</option>
                <option value="30">30 Entri Per Halaman</option>
                <option value="40">40 Entri Per Halaman</option>
          </select>
          <input 
            className="search-inPage form-input"
            name="search-inPage"
            type="text"
            placeholder="Cari"
            ref="search"
            value={this.state.search} /><br/>


      <div>
          <button type="submit" className="button-primary btn-red-dash" onClick={this.handleShow}>Tambah Mitra </button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <div className="box-top row-flex flex-space">
            <div className="judulPopup">Daftar Mitra Berjejaring</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Silahkan Masukkan Daftar Mitra Anda!
            </p>
          <div className="row-flex col-3 ">
                <input
                  inputId="namaMitra" 
                  type="text"
                  placeholder="Nama Mitra"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="nomorTelepon" 
                  type="text"
                  placeholder="Nomor Telepon"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="email" 
                  type="text"
                  placeholder="Email"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />

         </div><br/>
          <p>
              <b>Alamat</b>
            </p>
          <FormGroup controlId="formControlsTextareateksarea">
            <FormControl componentClass="textarea" placeholder="Masukkan Alamat Mitra" required="true" />
          </FormGroup>
        <br/><br/>
        <div className="row-flex col-5 ">
                <input
                  inputId="Provinsi" 
                  type="text"
                  placeholder="Provinsi "
                  class="form-control mitraberjejaring"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="Kabupaten/Kota" 
                  type="text"
                  placeholder="Kota/Kab "
                  class="form-control mitraberjejaring"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="Kecamatan" 
                  type="text"
                  placeholder="Kecamatan "
                  class="form-control mitraberjejaring"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="Kelurahan" 
                  type="text"
                  placeholder="Kelurahan "
                  class="form-control mitraberjejaring"
                  handleChange={this._handleChange}
                  required="true"
                />
                <input
                  inputId="KodePos" 
                  type="text"
                  placeholder="Kode Pos"
                  class="form-control mitraberjejaring"
                  handleChange={this._handleChange}
                  required="true"
                />
         </div>
         <br/>
              <b>Tempat dan Tanggal Didirikan</b>
        <br/>
        <div className="row-flex col-2 ">
          <input
                  inputId="tempatDidirikan" 
                  type="text"
                  placeholder="Tempat Didirikan"
                  class="form-control "
                  handleChange={this._handleChange}
                  required="true"
                />
          <input
                  inputId="tanggaltDidirikan" 
                  type="date"
                  placeholder="Tempat Didirikan"
                  class="form-control "
                  handleChange={this._handleChange}
                  required="true"
                />

        </div>
        <br/>
        <b>Akta</b><br/>
        <div className="row-flex col-1 ">
        <br/>
          <input
                  inputId="tempatDidirikan" 
                  type="text"
                  placeholder="Nomor Akta"
                  class="form-control "
                  handleChange={this._handleChange}
                  required="true"
                />

        </div>
        <br/><b>Akta Perubahan Terakhir</b><br/>
        <div className="row-flex col-2 ">
        <br/>
         <input
                  inputId="NomorAktaPerubahanTerakhir" 
                  type="text"
                  placeholder="Nomor Akta Perubahan Terakhir"
                  class="form-control "
                  handleChange={this._handleChange}
                  required="true"
                />
          <input
                  inputId="tanggalPerubahan" 
                  type="date"
                  placeholder=""
                  class="form-control "
                  handleChange={this._handleChange}
                  required="true"
                />

        </div>
        </Modal.Body>
 
        <div className="row-flex col-2">
              <button type="submit" className="button-primary btn-red-dash btn-popup" onClick={this.handleSubmit}>Daftarkan</button>
              <button type="submit" className="button-secondary btn-red-dash btn-popup" onClick={this.handleBatal}>Batal</button>
        </div>

        </Modal>
         </div>
         </div>
          <table>
          <thead>
            <tr>
              <th><b>Nama</b></th>
              <th><b>Tempat <br/>Didirikan</b></th>
              <th><b>Tanggal <br/>Didirikan</b></th>
              <th><b>Tanggal Akta <br/>Perubahan Terakhir</b></th>
              <th><b>Nomor Akta <br/>Perubahan Terakhir</b></th>
              <th><b>Email</b></th>
              <th><b>Nomor<br/>Telepon</b></th>
              <th><b>Nomor<br/>NPWP</b></th>
              <th><b>Alamat</b></th>
              <th><b>Aksi</b></th>
            </tr>
          </thead>
          <br/>
          <tbody>
           <tr>
                <td>Ivan Pradana</td>
                <td>Perumahan Inkopad</td>
                <td>10-08-2015</td>
                <td>23-09-2016</td>
                <td>1010101010</td>
                <td>airshare14@gmail.com</td>
                <td>081288796475</td>
                <td>1122334455</td>
                <td>Perumahan Inkopad</td>
                <td>Hapus</td>
            </tr>
          </tbody>
        </table>
        </div> 


      </div>

              )
      }
}