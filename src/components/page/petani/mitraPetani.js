import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, FormControl, ButtonGroup, Button, ButtonToolbar, ControlLabel, Form, InputGroup, MenuItem, HelpBlock, Table, Modal, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap'
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

const { Request } = helpers;
export default class penjualan extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.hapusMitra = this.hapusMitra.bind(this);

    this.state = {
      show: false,
      data: [],
      form: {
        search: ''
      }
    };
  }

  componentDidMount() {
    this.getData();
  }

  changeForm(name) {
    return (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [name]: e.target.value
        }
      });
    }
  }

  hapusMitra(id) {
    return () => {
      Request.get(`/hapusMitraPetani?id_mitrapetani=${id}`)
      .then(res => {
        const data = this.state.data.filter(x => x.id_mitrapetani != id);
        this.setState({
          data
        });
      })
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleBatal() {
    this.setState({ show: false });
  }

  handleSubmit() {
    Request.post('/tambahMitraPetani', {
      ...this.state.form
    })
    .then(res => {
      const { data } = this.state;
      data.push(this.state.form);
      this.setState({
        show: false,
        data
      });
    })
  }

  handleShow() {
    this.setState({ show: !this.state.true });
  }

  getData() {
    Request.get('/tampilMitraPetani')
    .then(res => {
      this.setState({
        data: res.data
      });
    })
  }

  renderList() {
    const { data, form } = this.state;
    return data.filter(x => (
      x.alamat.toLowerCase().indexOf(form.search) > -1 ||
      x.nama.toLowerCase().indexOf(form.search) > -1
    )).map((item, index) => (
      <tr key={index}>
        <td>{item.nama}</td>
        <td>{item.alamat}</td>
        <td>{item.no_telp}</td>
        <td>{item.min_kuantiti}</td>
        <td>{item.maks_kuantiti}</td>
        <td>{item.harga}</td>
        <td><a onClick={this.hapusMitra(item.id_mitrapetani)}>Hapus</a></td>
      </tr>
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
    const { data, form } = this.state;
    const { nama, kota, no_telp, alamat, min_kuantiti, maks_kuantiti, harga, search } = form;
    return (
      <div>
        <Header title="Penjualan" />
        <Header />
        <Sidebar />

        <div className="box-table table-penjualan">
          <div className="box-top row-flex flex-space">
            <p className="count-item"> {data.length} Mitra</p>

            <select
              className="dropdown form-input"
              value={this.state.user} onChange={(event) => this.setState({ user: event.target.value })}>
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
              value={search}
              onChange={this.changeForm('search')}
            /><br />


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
                      type="text"
                      placeholder="Nama"
                      class="form-control"
                      onChange={this.changeForm('nama')}
                      required="true"
                      value={nama}
                    />
                    <select
                      className="dropdown form-control dropdownText"
                      value={kota}
                      onChange={this.changeForm('kota')}
                    >
                      <option>Kota</option>
                      <option value="Bo">Bogor</option>
                      <option value="JA">Jakarta</option>
                      <option value="DE">Depok</option>
                      <option value="BEK">Bekasi</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Nomor Telepon"
                      class="form-control"
                      onChange={this.changeForm('no_telp')}
                      required="true"
                      value={no_telp}
                    />
                  </div>
                  <br />
                  <br />
                  <p>
                    <b>Alamat</b>
                  </p>
                  <br />
                  <FormGroup controlId="formControlsTextareateksarea">
                    <FormControl value={alamat} onChange={this.changeForm('alamat')} componentClass="textarea" placeholder="Masukkan Alamat Mitra" required="true" />
                  </FormGroup>
                  <br /><br /><br />
                  <b>Daya Tampung</b>
                  <br /><br />
                  <div className="row-flex col-3 ">
                    <FormGroup>
                      <InputGroup>
                        <FormControl value={min_kuantiti} onChange={this.changeForm('min_kuantiti')} type="text" inputId="minKuantiti" placeholder="Minimal Kuantiti " className="input-group addonKg minKuantiti" required="true" />
                        <div className="input-group-addon"><InputGroup.Addon> Kg</InputGroup.Addon></div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                        <FormControl value={maks_kuantiti} onChange={this.changeForm('maks_kuantiti')} type="text" inputId="maxKuantiti" placeholder="Maksimal Kuantiti" className="input-group addonKg maxKuantiti" required="true" />
                        <div className="input-group-addon"><InputGroup.Addon>Kg</InputGroup.Addon></div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup>
                        <FormControl value={harga} onChange={this.changeForm('harga')} type="text" inputId="harga" placeholder="Harga" className="input-group addonKg harga" required="true" />
                        <div className="input-group-addon"><InputGroup.Addon>Rp</InputGroup.Addon></div>
                      </InputGroup>
                    </FormGroup>

                  </div>
                  <br />
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
            <br />
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>


      </div>

    )
  }
}
