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
export default class penjualan extends Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
          <button type="submit" className="button-primary btn-red-dash" onClick={this.handleShow}>Daftar Mitra Petani</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <div className="box-top row-flex flex-space">
            <div className="judulPopup">Daftar Mitra Petani</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Silahkan Masukkan Daftar Mitra Petani
            </p>
          <div className="row-flex col-3 ">
                <input
                  inputId="namaMitraPetani" 
                  type="text"
                  placeholder="Nama"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />
                <select 
                  className="dropdown form-control dropdownText"
                  value={this.state.kota} onChange={(event) => this.setState({kategori: event.target.value})}>                                    
                  <option>Kota</option>
                  <option value="Bo">Bogor</option>
                  <option value="JA">Jakarta</option>
                  <option value="DE">Depok</option>
                  <option value="BEK">Bekasi</option>
                </select>
                <input
                  inputId="nomorTelepon" 
                  type="text"
                  placeholder="Nomor Telepon"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />
         </div>
         <br/>
          <br/>
          <p>
              <b>Alamat</b>
            </p>
            <br/>
          <FormGroup controlId="formControlsTextareateksarea">
            <FormControl componentClass="textarea" placeholder="Masukkan Alamat Mitra" required="true" />
          </FormGroup>
        <br/><br/><br/>
              <b>Daya Tampung</b>
        <br/><br/>
        <div className="row-flex col-3 ">
          <FormGroup>
            <InputGroup>
            <FormControl type="text" inputId="minKuantiti" placeholder="Minimal Kuantiti " className="input-group addonKg minKuantiti" required="true" />
            <div className="input-group-addon"><InputGroup.Addon> Kg</InputGroup.Addon></div>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
            <FormControl type="text" inputId="maxKuantiti" placeholder="Maksimal Kuantiti" className="input-group addonKg maxKuantiti" required="true" />
            <div className="input-group-addon"><InputGroup.Addon>Kg</InputGroup.Addon></div>
            </InputGroup>
          </FormGroup>
           <FormGroup>
            <InputGroup>
            <FormControl type="text" inputId="harga" placeholder="Harga" className="input-group addonKg harga"required="true" />
            <div className="input-group-addon"><InputGroup.Addon>Rp</InputGroup.Addon></div>
            </InputGroup>
          </FormGroup>

        </div>
        <br/>
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
              <th><b>Alamat</b></th>
              <th><b>No.Telp</b></th>
              <th><b>Minimal Kuantiti</b></th>
              <th><b>Maximal Kuantiti</b></th>
              <th><b>Harga</b></th>
              <th><b>Aksi</b></th>
            </tr>
          </thead>
          <br/>
          <tbody>
           <tr>
                <td>Ivan Pradana</td>
                <td>Perumahan Inkopad</td>
                <td>081288796475</td>
                <td>1000 Kg</td>
                <td>3000 Kg</td>
                <td>Rp. 200.000</td>
                <td>Hapus</td>
            </tr>
          </tbody>
        </table>
        </div> 


      </div>

              )
      }
}