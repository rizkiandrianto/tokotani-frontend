import React, { Component }  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger, FieldGroup  } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import { Link } from 'react-router-dom';
import Header from '../../partial/headerDashboard'
import Sidebar from '../../partial/Sidebar';
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
export default class penjualan extends Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);

    this.state = {
      show: false
    };
  }

  handleBerhasil(){
    this.setState({ show: !this.state.true})
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleClose2() {
    this.setState({ lgshow: false });
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

  handleShow2() {
    this.setState({ lgshow: !this.state.true});
  }

render() {
  function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}

        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
        <div>
        <Header title="Penjualan" />
        <Header/>  
        <Sidebar/>
        
        <div className="box-table table-penjualan">
            <div className="box-top row-flex flex-space">
              <p className="count-item"> 2 Produk</p>
           
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
          <button type="submit" className="button-primary btn-red-dash" onClick={this.handleShow}>Jual Produk</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <div className="box-top row-flex flex-space">
            <div className="judulPopup">Jual Produk</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Silahkan Masukkan Detail Produk
            </p>
          <div className="row-flex col-2 ">
                <input
                  inputId="judulProduk" 
                  type="text"
                  placeholder="Judul Produk"
                  class="form-control"
                  ref="judulProduk"
                  handleChange={this._handleChange}
                  required="true"
                />
                <select 
                  className="dropdown form-control dropdownText"
                  value={this.state.kategori} onChange={(event) => this.setState({kategori: event.target.value})}>                                    
                  <option>Kategori</option>
                  <option value="ppo">Pupuk, Pestisida, Obat</option>
                  <option value="bibit">Bibit Tanaman</option>
                  <option value="buah">Buah-buahan</option>
                  <option value="sayur">Sayuran</option>
                  <option value="tanaman">Tanaman Hias</option>
                </select>
         </div>
         <br/>
         <div className="row-flex col-3 ">
                <select 
                  className="dropdown form-control dropdownText"
                  value={this.state.satuan} onChange={(event) => this.setState({satuan: event.target.value})}>                                    
                  <option>Satuan</option>
                  <option value="kg">Kg</option>
                  <option value="ton">Ton</option>
                  <option value="lt">Liter</option>
                  <option value="unit">Unit</option>
                </select>
                <input
                  inputId="minPembelian" 
                  type="text"
                  placeholder="Minimal Pembelian"
                  class="form-control"
                  ref="minPembelian"
                  handleChange={this._handleminPembelian}
                  required="true"
                />
                <input
                  inputId="jumlahStok" 
                  type="text"
                  placeholder="Jumlah Stok"
                  class="form-control"
                  ref="jumlahStok"
                  handleChange={this._handlejumlahStok}
                  required="true"
                />      
          </div>
          <br/>
          <div className="row-flex col-1 ">
          
                <input
                  inputId="Harga" 
                  type="text"
                  placeholder="Harga"
                  class="form-control"
                  ref="Harga"
                  handleChange={this._handleHarga}
                  required="true"
                /> 
          </div>
          <br/>
          <p>
              <b>Deskripsi</b>
            </p>
          <FormGroup controlId="formControlsTextareateksarea">
            <FormControl componentClass="textarea" placeholder="Masukkan Deskripsi Produk" required="true" />
          </FormGroup>
        <br/><br/><br/>
              <b>Foto Produk</b>
        <br/><br/>
        <div className="row-flex col-2 ">
          <FieldGroup
          id="formControlsFile"
          type="file"
          />
          <FieldGroup
            id="formControlsFile"
            type="file"
          />
        </div>
        <br/>
        <div className="row-flex col-2 ">
          <FieldGroup
            id="formControlsFile"
            type="file"
          />
          <FieldGroup
            id="formControlsFile"
            type="file"
          />
        </div>
        </Modal.Body>

        <div className="row-flex col-2">
              <button type="submit" className="button-primary btn-red-dash btn-popup" onClick={this.handleShow2}onHide={this.handleClose}>Jual Produk</button>
              <Modal show={this.state.lgshow} onHide={this.handleClose2}>
          <Modal.Header closeButton>
          <div className="box-top row-flex flex-space">
            <div className="judulPopup">Sukses</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Produk Berhasil Di Simpan!
            </p>
          
        </Modal.Body>

        </Modal>
              <button type="submit" className="button-secondary btn-red-dash btn-popup" onClick={this.handleBatal}>Batal</button>
        </div>

        </Modal>
         </div>
         </div>
          <table>
          <thead>
            <tr>
              <th><b>Foto Produk</b></th>
              <th><b>Nama Produk</b></th>
              <th><b>Harga</b></th>
              <th><b>Deskripsi</b></th>
              <th><b>Transportasi</b></th>
              <th><b>Tanggal Di Jual</b></th>
              <th><b>Stok</b></th>
              <th><b>Aksi</b></th>
            </tr>
          </thead>
          <br/>
          <tbody>
              <tr>
                <td>Foto</td>
                <td>Bibit Pepaya Calina</td>
                <td>Rp. 2.000</td>
                <td>Bibit Pepaya asli dari calina</td>
                <td>Bogor</td>
                <td>02-02-2018</td>
                <td>20</td>
                <td>Hapus</td>
            </tr>
            <tr>
                <td>Foto</td>
                <td>Kacang Hijau Kupas</td>
                <td>Rp. 28.000</td>
                <td>Kacang Hijau Kupas</td>
                <td>Bogor</td>
                <td>01-02-2018</td>
                <td>25</td>
                <td>Hapus</td>
            </tr>
          </tbody>
        </table>
        </div> 


      </div>

              )
      }
}