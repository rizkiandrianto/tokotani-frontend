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
export default class mitraberjejaring extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBatal = this.handleBatal.bind(this), this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);

    this.onChange = this.onChange.bind(this);
    this.state = {
      show: false,
      data: [],
      searchTerms: '',
      form: {
        search: ''
      }
    };
  }

  componentDidMount() {
    this.getData();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleBatal() {
    this.setState({ show: false });
  }

  handleSubmit() {
    Request.post('/tambahMitraBerjejaring', this.state.form)
    .then(res => {
      const { data } = this.state;
      data.push(this.state.form);
      this.setState({
        show: false ,
        data
      });
    })
  }

  handleShow() {
    this.setState({ show: !this.state.true });
  }

  onChange(name) {
    return (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [name]: e.target.value
        }
      });
    }
  }

  getData() {
    Request.get('/tampilMitraBerjejaring')
    .then(res => {
      this.setState({
        data: res.data
      });
    })
  }

  delete(id) {
    return () => {
      Request.get(`/hapusMitraBerjejaring?id_mitraberjejaring=${id}`)
      .then(res => {
        const data = this.state.data.filter(x => x.id_mitraberjejaring != id);
        this.setState({
          data
        });
      })
    }
  }

  renderList() {
    const { data, form } = this.state;
    return data.filter(x => (
      x.nama_mitra.toLowerCase().indexOf(form.search) > -1 ||
      x.tempat_didirikan.toLowerCase().indexOf(form.search) > -1 ||
      x.akta_perubahan_terakhir.toLowerCase().indexOf(form.search) > -1 ||
      x.nomor_akta.toLowerCase().indexOf(form.search) > -1 ||
      x.email.toLowerCase().indexOf(form.search) > -1 ||
      x.no_telp.toLowerCase().indexOf(form.search) > -1 ||
      x.alamat.toLowerCase().indexOf(form.search) > -1
    )).map((item, index) => (
      <tr key={index}>
        <td>{item.nama_mitra}</td>
        <td>{item.tempat_didirikan}</td>
        <td>{item.tanggal_didirikan}</td>
        <td>{item.tanggal_perubahan_terakhir}</td>
        <td>{item.akta_perubahan_terakhir}</td>
        <td>{item.email}</td>
        <td>{item.no_telp}</td>
        <td>{item.nomor_akta}</td>
        <td>{item.alamat}</td>
        <td><a onClick={this.delete(item.id_mitraberjejaring)}>Hapus</a></td>
      </tr>
    ));
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
    const { form, data } = this.state;
    const {
      nama_mitra,
      no_telp,
      email,
      alamat,
      tempat_didirikan,
      tanggal_didirikan,
      nomor_akta,
      akta_perubahan_terakhir,
      tanggal_perubahan_terakhir,
      provinsi,
      kota,
      kecamatan,
      kelurahan,
      kode_pos,
      search
    } = form;
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
              onChange={this.onChange('search')}
              /><br />


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
                      type="text"
                      placeholder="Nama Mitra"
                      class="form-control"
                      onChange={this.onChange('nama_mitra')}
                      value={nama_mitra}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Nomor Telepon"
                      class="form-control"
                      onChange={this.onChange('no_telp')}
                      value={no_telp}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      class="form-control"
                      onChange={this.onChange('email')}
                      value={email}
                      required="true"
                    />

                  </div><br />
                  <p>
                    <b>Alamat</b>
                  </p>
                  <FormGroup controlId="formControlsTextareateksarea">
                    <FormControl value={alamat} onChange={this.onChange('alamat')} componentClass="textarea" placeholder="Masukkan Alamat Mitra" required="true" />
                  </FormGroup>
                  <br /><br />
                  <div className="row-flex col-5 ">
                    <input
                      type="text"
                      placeholder="Provinsi "
                      class="form-control mitraberjejaring"
                      onChange={this.onChange('provinsi')}
                      value={provinsi}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Kota/Kab "
                      class="form-control mitraberjejaring"
                      onChange={this.onChange('kota')}
                      value={kota}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Kecamatan "
                      class="form-control mitraberjejaring"
                      onChange={this.onChange('kecamatan')}
                      value={kecamatan}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Kelurahan "
                      class="form-control mitraberjejaring"
                      onChange={this.onChange('kelurahan')}
                      value={kelurahan}
                      required="true"
                    />
                    <input
                      type="text"
                      placeholder="Kode Pos"
                      class="form-control mitraberjejaring"
                      onChange={this.onChange('kode_pos')}
                      value={kode_pos}
                      required="true"
                    />
                  </div>
                  <br />
                  <b>Tempat dan Tanggal Didirikan</b>
                  <br />
                  <div className="row-flex col-2 ">
                    <input
                      type="text"
                      placeholder="Tempat Didirikan"
                      class="form-control "
                      onChange={this.onChange('tempat_didirikan')}
                      value={tempat_didirikan}
                      required="true"
                    />
                    <input
                      type="date"
                      placeholder="Tanggal Didirikan"
                      class="form-control "
                      onChange={this.onChange('tanggal_didirikan')}
                      value={tanggal_didirikan}
                      required="true"
                    />

                  </div>
                  <br />
                  <b>Akta</b><br />
                  <div className="row-flex col-1 ">
                    <br />
                    <input
                      type="text"
                      placeholder="Nomor Akta"
                      class="form-control "
                      onChange={this.onChange('nomor_akta')}
                      value={nomor_akta}
                      required="true"
                    />

                  </div>
                  <br /><b>Akta Perubahan Terakhir</b><br />
                  <div className="row-flex col-2 ">
                    <br />
                    <input
                      type="text"
                      placeholder="Nomor Akta Perubahan Terakhir"
                      class="form-control "
                      onChange={this.onChange('akta_perubahan_terakhir')}
                      value={akta_perubahan_terakhir}
                      required="true"
                    />
                    <input
                      type="date"
                      placeholder=""
                      class="form-control "
                      onChange={this.onChange('tanggal_perubahan_terakhir')}
                      value={tanggal_perubahan_terakhir}
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
                <th><b>Tempat <br />Didirikan</b></th>
                <th><b>Tanggal <br />Didirikan</b></th>
                <th><b>Tanggal Akta <br />Perubahan Terakhir</b></th>
                <th><b>Nomor Akta <br />Perubahan Terakhir</b></th>
                <th><b>Email</b></th>
                <th><b>Nomor<br />Telepon</b></th>
                <th><b>Nomor<br />NPWP</b></th>
                <th><b>Alamat</b></th>
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
