import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger, FieldGroup } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import { Link } from 'react-router-dom';
import Header from '../../partial/headerDashboard'
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';
import helpers from '../../../helpers';

const { Request, API_SERVER } = helpers;
export default class penjualan extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.changeSearch = this.changeSearch.bind(this);

    this.state = {
      show: false,
      data: [],
      form: {},
      search: ""
    };
  }

  changeSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  changeForm(name) {
    return (e) => {
      let files;
      if (name === 'foto1') {
        files = e.target.files[0];
      }
      this.setState({
        form: {
          ...this.state.form,
          [name]: name == 'foto1' ? e.target.files[0].name : e.target.value
        }
      }, () => {
        if (name === 'foto1') {
          this.setState({
            foto1: files
          });
        }
      });
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleBatal() {
    this.setState({ show: false });
  }

  handleSubmit() {
    const { data, foto1 } = this.state;
    let dataTemp = new FormData();
    dataTemp.append('foto1', foto1);

    Request.post('/coba', dataTemp)
    .then(e => {
      Request.post('/tambahPenjualan', {
        ...this.state.form
      })
      .then(res => {
        let data_ = data;
        data_.push({...this.state.form});
        this.setState({
          show: false,
          data
        }, () => {
          this.getData();
        });

      })
      .catch(err => console.error(err))
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  deleteData(id) {
    return () => {
      Request.get(`/hapusPenjualan?id_penjualan=${id}`)
      .then(res => {
        let { data } = this.state;
        data = data.filter(x => x.id_penjualan !== id);
        this.setState({
          data
        });
      })
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Request.get('/tampilPenjualan')
      .then(res => {
        const { data } = res;
        this.setState({
          data
        });
      })
      .catch(err => console.error(err))
  }

  renderData() {
    const { data, search } = this.state;

    if (data.length) {
      return data.filter(x => (
        x.judul_produk.toLowerCase().indexOf(search) > -1 ||
        x.deskripsi.toLowerCase().indexOf(search) > -1
      ))
      .map((item, index) => (
        <tr key={index}>
          <td><img className="imgtable" src={`${API_SERVER}/images/${item.foto1}`} /></td>
          <td>{item.judul_produk}</td>
          <td>Rp. {item.harga_minimal}</td>
          <td>{item.deskripsi}</td>
          <td>{item.transportasi}</td>
          <td>{null}</td>
          <td>{item.jumlah_stok}</td>
          <td><a onClick={this.deleteData(item.id_penjualan)}>Hapus</a></td>
        </tr>
      ));
    }
    return (
      <tr>
        <td colSpan="8" className="text-center">Data is Empty</td>
      </tr>
    );
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
    const { form, data } = this.state;
    const {
      judul_produk,
      kategori,
      satuan,
      minimal_pembelian,
      jumlah_stok,
      harga_minimal,
      harga_maksimal,
      transportasi,
      deskripsi,
      foto1,
      foto2,
      foto3,
      foto4
    } = form;
    return (
      <div>
        <Header title="Penjualan" />
        <Sidebar />
        <Header />


        <div className="box-table table-penjualan">
          <div className="box-top row-flex flex-space">
            <p className="count-item"> {data.length} Produk</p>

            <select
              className="dropdown form-input"
              value={this.state.user} onChange={(event) => this.setState({ user: event.target.value })}>
              <option value="10">10 Entri Per Halaman</option>
              <option value="20">20 Entri Per Halaman</option>
              <option value="30">30 Entri Per Halaman</option>
              <option value="40">40 Entri Per Halaman</option>
            </select>
            <input
              className="search-inPage input-form"
              name="search-inPage"
              type="text"
              placeholder="Cari"
              value={this.state.search}
              onChange={this.changeSearch}
              /><br />

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
                      type="text"
                      placeholder="Judul Produk"
                      className="form-control"
                      onChange={this.changeForm('judul_produk')}
                      required="true"
                      value={judul_produk}
                    />
                    <select
                      className="dropdown form-control dropdownText"
                      value={kategori}
                      onChange={this.changeForm('kategori')}
                    >
                      <option>Kategori</option>
                      <option value="ppo">Pupuk, Pestisida, Obat</option>
                      <option value="bibit">Bibit Tanaman</option>
                      <option value="buah">Buah-buahan</option>
                      <option value="sayur">Sayuran</option>
                      <option value="tanaman">Tanaman Hias</option>
                    </select>
                  </div>
                  <br />
                  <div className="row-flex col-3 ">
                    <select
                      className="dropdown form-control dropdownText"
                      value={satuan}
                      onChange={this.changeForm('satuan')}
                    >
                      <option>Satuan</option>
                      <option value="kg">Kg</option>
                      <option value="ton">Ton</option>
                      <option value="lt">Liter</option>
                      <option value="unit">Unit</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Minimal Pembelian"
                      className="form-control"
                      onChange={this.changeForm('minimal_pembelian')}
                      value={minimal_pembelian}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Jumlah Stok"
                      className="form-control"
                      onChange={this.changeForm('jumlah_stok')}
                      value={jumlah_stok}
                      required="true"
                    />
                  </div>
                  <br />
                  <div className="row-flex col-3 ">
                    <input
                      type="text"
                      placeholder="Harga Minimal"
                      className="form-control"
                      onChange={this.changeForm('harga_minimal')}
                      required="true"
                      value={harga_minimal}
                    />
                    <input
                      type="text"
                      placeholder="Harga Maksimal"
                      className="form-control"
                      onChange={this.changeForm('harga_maksimal')}
                      required="true"
                      value={harga_maksimal}
                    />
                    <select
                      className="dropdown form-control dropdownText"
                      value={transportasi}
                      onChange={this.changeForm('transportasi')}
                      >
                      <option>Transportasi</option>
                      <option value="mitraPetani">Mitra Petani</option>
                      <option value="no">Tidak Ada</option>
                    </select>
                  </div>
                  <br />
                  <p>
                    <b>Deskripsi</b>
                  </p>
                  <FormGroup controlId="formControlsTextareateksarea">
                    <FormControl
                      placeholder="Masukkan Deskripsi Produk"
                      required="true"
                      value={deskripsi}
                      onChange={this.changeForm('deskripsi')}
                    />
                  </FormGroup>
                  <br /><br /><br />
                  <b>Foto Produk</b>
                  <br /><br />
                  <div className="row-flex col-2 ">
                    <FieldGroup
                      id="formControlsFile1"
                      type="file"
                      onChange={this.changeForm('foto1')}
                      filename={foto1}
                    />
                    <FieldGroup
                      id="formControlsFile2"
                      type="file"
                      onChange={this.changeForm('foto2')}
                      filename={foto2}
                    />
                  </div>
                  <br />
                  <div className="row-flex col-2 ">
                    <FieldGroup
                      id="formControlsFile3"
                      type="file"
                      onChange={this.changeForm('foto3')}
                      filename={foto3}
                    />
                    <FieldGroup
                      id="formControlsFile4"
                      type="file"
                      onChange={this.changeForm('foto4')}
                      filename={foto4}
                    />
                  </div>
                </Modal.Body>

                <div className="row-flex col-2">
                  <button type="submit" className="button-primary btn-red-dash btn-popup" onClick={this.handleSubmit}>Jual Produk</button>
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
            <br />
            <tbody>
              {this.renderData()}
            </tbody>
          </table>
        </div>


      </div>

    )
  }
}
