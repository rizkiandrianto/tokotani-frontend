import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Tab, Tabs, DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import Header from '../../partial/headerDashboard'
import '../../../css/component/transPenjualan.css';
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';
import helpers from '../../../helpers';

const { Request } = helpers;

export default class transPenjualan extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleProses = this.handleProses.bind(this);
    this.handleProses2 = this.handleProses2.bind(this);
    this.handleProses3 = this.handleProses3.bind(this);

    this.state = {
      show: false,
      transaksi: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  handleProses(id) {
    return () => {
      Request.get(`/KonfirmasiPengiriman?id_tp=${id}`)
      .then(res => {
        this.getData();
      })
    };
  }

  handleProses2(id) {
    return () => {
      Request.get(`/StatusPengiriman?id_tp=${id}`)
      .then(res => {
        this.getData();
      })
    };
  }

  handleProses3(id) {
    return () => {
      Request.get(`/DaftarPenjualan?id_tp=${id}`)
      .then(res => {
        this.getData();
      })
    };
  }

  handleSubmit2() {
    console.log('clicked')
    Request.post('/NomorPengiriman', this.state)
    .then(res => {
      this.setState({ show: false });
      
    })
  }

  onChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      });
    }
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
    this.setState({ show: !this.state.true });
  }

  getData() {
    Request.get('/tampilTransaksiPenjualan')
      .then(res => {
        this.setState({
          transaksi: res.data
        });
      })
  }

  renderTransaksiPenjualan() {
    const { transaksi } = this.state;
    if (transaksi.length) {
      return transaksi.filter(x => x.status == 1).map((item, index) => (
        <div class="social-share-wrap" key={index}>
          <div class="cover">
            <center>
              <img className="imgtranspenjualan" src={`/${'images/man.png'}`} />
            </center>
          </div>
          <div class="content">
            <div class="title"><b>Pesanan Dari:</b><t />&nbsp;&nbsp;&nbsp;{item.nama}</div>
            <div class="text"><b>Alamat:</b>
              <p>{item.alamat}</p>
              <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;{item.tanggal_pembayaran}</p>
              <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;{item.metode_pengiriman}</p>
              <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;{item.pesanan}</p>
              <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;{item.catatan}</p>
              <p><b>Status :</b>&nbsp;&nbsp;&nbsp;Pembayaran Telah Diterima</p>
            </div>
            <div class="price">Rp.{item.harga}</div>
            <a
            class="buy"
            id="uncontrolled-tab-example-tab-2"
            role="tab"
            target="uncontrolled-tab-example-tab-2"
            onClick={this.handleProses(item.id_transPenjualan)}
            >
              <i class="fa fa-shopping-cart"></i>Proses
            </a>
          </div>
        </div>
      ))
    }
    return null;
  }

  renderKonfirmasiPengiriman() {
    const { transaksi, nomor_pengiriman } = this.state;
    if (transaksi.length) {
      return transaksi.filter(x => x.status == 2).map((item, index) => (
        <div class="social-share-wrap ">
          <div class="cover proses">
            <center>
              <img className="imgtranspenjualan" src={`/${'images/man.png'}`} />
            </center>
          </div>
          <div class="content" key={index}>
            <div class="title"><b>Pesanan Dari:</b><t />&nbsp;&nbsp;&nbsp;{item.nama}</div>
            <div class="text"><b>Alamat:</b>
              <p>{item.alamat}</p>
              <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;{item.tanggal_pembayaran}</p>
              <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;{item.metode_pengiriman}</p>
              <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;{item.pesanan}</p>
              <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;{item.catatan}</p>
              <p><b>Status :</b>&nbsp;&nbsp;&nbsp;Menunggu di Proses oleh Penjual</p>
            </div>
            <div class="price">Rp.{item.harga}
            <a
            class="buy"
            id="uncontrolled-tab-example-tab-2"
            role="tab"
            target="uncontrolled-tab-example-tab-2"
            onClick={this.handleProses2(item.id_transPenjualan)}
            >
              <i class="fa fa-shopping-cart"></i>Proses
            </a>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit" className="button-primary btn-red-dash" onClick={this.handleShow}>Masukkan Nomor Pengiriman</button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <div className="box-top row-flex flex-space">
                  <div className="judulPopup">Kirim Barang</div>
                </div>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Silahkan Masukkan Nomor Resi Atau Plat Nomor Pengirim
                          </p> <br />
                <div className="row-flex col-2 ">
                  <input
                    
                    type="text"
                    placeholder="Nomor Resi/Plat Nomor"
                    class="form-control"
                    value={nomor_pengiriman} 
                    onChange={this.onChange('nomor_pengiriman')}
                    required="true"
                  />
                </div>
                <br />
              </Modal.Body>

              <div className="row-flex col-2">
                <button type="submit" className="button-primary btn-red-dash btn-popup" onClick={this.handleSubmit2}>Kirim</button>
                <button type="submit" className="button-secondary btn-red-dash btn-popup" onClick={this.handleClose}>Batal</button>
              </div>

            </Modal>
          </div>
        </div>
      ));
    }
    return null;
  }

  renderStatusPengiriman() {
    const { transaksi } = this.state;

    return transaksi.filter(x => x.status == 3).map((item, index) => (
      <div class="social-share-wrap" key={index}>
        <div class="cover proses">
          <center>
            <img className="imgtranspenjualan" src={`/${'images/man.png'}`} />
          </center>
        </div>
        <div class="content">
          <div class="title"><b>Pesanan Dari:</b><t />&nbsp;&nbsp;&nbsp;{item.nama}</div>
          <div class="text"><b>Alamat:</b>
            <p>{item.alamat}</p>
            <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;{item.tanggal_pembayaran}</p>
            <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;{item.metode_pengiriman}</p>
            <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;{item.pesanan}</p>
            <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;{item.catatan}</p>
            <p><b>Status :</b>&nbsp;&nbsp;&nbsp;<i>Sedang Dalam Pengiriman</i></p>
          </div>
          <div class="price">Rp.{item.harga}</div>
          <a
            class="buy"
            id="uncontrolled-tab-example-tab-2"
            role="tab"
            target="uncontrolled-tab-example-tab-2"
            onClick={this.handleProses3(item.id_transPenjualan)}
            >
              <i class="fa fa-shopping-cart"></i>Selesai
            </a>
        </div>
      </div>
    ))
  }

  renderDaftarPenjualan() {
    const { transaksi } = this.state;

    return transaksi.filter(x => x.status == 4).map((item, index) => (
      <div class="social-share-wrap" key={index}>
        <div class="cover">
          <center>
            <img className="imgtranspenjualan" src={`/${'images/man.png'}`} />
          </center>
        </div>
        <div class="content">
          <div class="title"><b>Pesanan Dari:</b><t />&nbsp;&nbsp;&nbsp;{item.nama}</div>
          <div class="text"><b>Alamat:</b>
            <p>{item.alamat}</p>
            <p><b>Tanggal Pembayaran :</b>&nbsp;&nbsp;&nbsp;{item.tanggal_pembayaran}</p>
            <p><b>Metode Pengiriman :</b>&nbsp;&nbsp;&nbsp;{item.metode_pengiriman}</p>
            <p><b>Pesanan :</b>&nbsp;&nbsp;&nbsp;{item.pesanan}</p>
            <p><b>Catatan Untuk Penjual :</b>&nbsp;&nbsp;&nbsp;{item.catatan}</p>
            <p><b>Status :</b>&nbsp;&nbsp;&nbsp;<i>Barang Sudah Di Terima Transaksi Sukses</i></p>
          </div>
          <div class="price">Rp.{item.harga}</div>
        </div>
      </div>
    ))
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
        <Header />
        <Sidebar />
        <div className="box-table table-penjualan">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Penjualan">
              <input class="toggle" id="toggle" type="checkbox" />
              {this.renderTransaksiPenjualan()}
            </Tab>
            <Tab eventKey={2} title="Konfirmasi Pengiriman">
              <input class="toggle" id="toggle" type="checkbox" />
              {this.renderKonfirmasiPengiriman()}
            </Tab>
            <Tab eventKey={3} title="Status Pengiriman" >
              <input class="toggle" id="toggle" type="checkbox" />
              {this.renderStatusPengiriman()}
            </Tab>
            <Tab eventKey={4} title="Daftar Penjualan" >
              <input class="toggle" id="toggle" type="checkbox" />
              {this.renderDaftarPenjualan()}
            </Tab>
          </Tabs>
        </div>
      </div>



    )
  }
}
