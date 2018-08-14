import React, { Component }  from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Tab, Tabs, DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger  } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import Header from '../../partial/headerDashboard'
import '../../../css/component/transPenjualan.css';
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';

export default class transPenjualan extends Component{
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
        <Header title="Transaksi Penjualan" />
        <Header/>  
        <Sidebar/>
        <div className="box-table table-penjualan">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Penjualan">
        <input class="toggle" id="toggle" type="checkbox"/>
            <div class="social-share-wrap">
                <div class="cover">
                    <center>
                    <img className="imgtranspenjualan" src={`/${'images/man.png'}`}/>
                    </center>
                </div>
                <div class="content">
                    <div class="title"><b>Pesanan Dari:</b><t/>&nbsp;&nbsp;&nbsp;Ivan Pradana</div>
                    <div class="text"><b>Alamat:</b>
                    <p>Perumahan Inkopad Blok J1 no. 10, Kabupaten Bogor, Jawa Barat</p>
                    <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;20/05/2018 19:00</p>
                    <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;JNE</p>
                    <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;Jeruk(3Kg), Kelengkeng(10kg)</p>
                    <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;Dipacking dengan aman ya!</p>
                    <p><b>Status :</b>&nbsp;&nbsp;&nbsp;<i>Pembayaran Diterima</i></p>
                    </div>
                    <div class="price">Rp.75.000</div>
                    <a class="buy" id="uncontrolled-tab-example-tab-2" role="tab" target="uncontrolled-tab-example-tab-2"><i class="fa fa-shopping-cart"></i>Proses </a>
                </div>
                </div>
      </Tab>
      <Tab eventKey={2} title="Konfirmasi Pengiriman">
        <input class="toggle" id="toggle" type="checkbox"/>
            <div class="social-share-wrap ">
                <div class="cover proses">
                    <center>
                    <img className="imgtranspenjualan" src={`/${'images/man.png'}`}/>
                    </center>
                </div>
                <div class="content">
                    <div class="title"><b>Pesanan Dari:</b><t/>&nbsp;&nbsp;&nbsp;Ivan Pradana</div>
                    <div class="text"><b>Alamat:</b>
                    <p>Perumahan Inkopad Blok J1 no. 10, Kabupaten Bogor, Jawa Barat</p>
                    <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;20/05/2018 19:00</p>
                    <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;JNE</p>
                    <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;Jeruk(3Kg), Kelengkeng(10kg)</p>
                    <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;Dipacking dengan aman ya!</p>
                    <p><b>Status :</b>&nbsp;&nbsp;&nbsp;Menunggu di Proses oleh Penjual</p>
                    </div>
                    <div class="price">Rp.75.000</div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="button-primary btn-red-dash" onClick={this.handleShow}>Masukkan Nomor Resi</button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <div className="box-top row-flex flex-space">
            <div className="judulPopup">Kirim Barang</div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Silahkan Masukkan Nomor Resi
            </p> <br/>
          <div className="row-flex col-2 ">
                <input
                  inputId="judulBarang" 
                  type="text"
                  placeholder="Nomor Resi"
                  class="form-control"
                  handleChange={this._handleChange}
                  required="true"
                />
         </div>
         <br/>
        </Modal.Body>
 
        <div className="row-flex col-2">
              <button type="submit" className="button-primary btn-red-dash btn-popup" onClick={this.handleSubmit}>Kirim</button>
              <button type="submit" className="button-secondary btn-red-dash btn-popup" onClick={this.handleClose}>Batal</button>
        </div>

        </Modal>
                </div>
                </div>
      </Tab>
      <Tab eventKey={3} title="Status Pengiriman" >
        <input class="toggle" id="toggle" type="checkbox"/>
            <div class="social-share-wrap">
                <div class="cover proses">
                    <center>
                    <img className="imgtranspenjualan" src={`/${'images/man.png'}`}/>
                    </center>
                </div>
                <div class="content">
                    <div class="title"><b>Pesanan Dari:</b><t/>&nbsp;&nbsp;&nbsp;Ivan Pradana</div>
                    <div class="text"><b>Alamat:</b>
                    <p>Perumahan Inkopad Blok J1 no. 10, Kabupaten Bogor, Jawa Barat</p>
                    <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;20/05/2018 19:00</p>
                    <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;JNE</p>
                    <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;Jeruk(3Kg), Kelengkeng(10kg)</p>
                    <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;Dipacking dengan aman ya!</p>
                    <p><b>Status :</b>&nbsp;&nbsp;&nbsp;<i>Sedang Dalam Pengiriman</i></p>
                    </div>
                    <div class="price">Rp.75.000</div>
                </div>
                </div>
      </Tab>
      <Tab eventKey={4} title="Daftar Penjualan" >
        <input class="toggle" id="toggle" type="checkbox"/>
            <div class="social-share-wrap">
                <div class="cover">
                    <center>
                    <img className="imgtranspenjualan" src={`/${'images/man.png'}`}/>
                    </center>
                </div>
                <div class="content">
                    <div class="title"><b>Pesanan Dari:</b><t/>&nbsp;&nbsp;&nbsp;Ivan Pradana</div>
                    <div class="text"><b>Alamat:</b>
                    <p>Perumahan Inkopad Blok J1 no. 10, Kabupaten Bogor, Jawa Barat</p>
                    <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;20/05/2018 19:00</p>
                    <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;JNE</p>
                    <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;Jeruk(3Kg), Kelengkeng(10kg)</p>
                    <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;Dipacking dengan aman ya!</p>
                    <p><b>Status :</b>&nbsp;&nbsp;&nbsp;<i>Barang Sudah Di Terima Transaksi Sukses</i></p>
                    </div>
                    <div class="price">Rp.75.000</div>
                </div>
                </div>
      </Tab>
    </Tabs>
        </div>
        </div>



    )
}
}