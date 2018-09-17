import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DropdownButton, FormGroup, ControlLabel, FormControl, ButtonGroup, Button, ButtonToolbar, MenuItem, Table } from 'react-bootstrap'
import Cookie from 'react-cookie'
import autoBind from 'react-autobind'
import Header from '../../partial/headerDashboard'
import '../../../css/component/common/table.css';
import '../../../css/component/common/dropdown.css';
import '../../../css/component/common/inputForm.css';
import '../../../css/component/common/button.css';
import Sidebar from '../../partial/Sidebar';
import helpers from '../../../helpers';

const { Request } = helpers;
export default class hubungiKami extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

    this.state = {
      judul_pertanyaan: '',
      kategori: '',
    }
  }

  onChange(name) {
    return (e) => {
      this.setState({
        [name]: e.target.value
      });
    }
  }

  handleSubmit() {
    console.log('clicked')
    Request.post('/hubungiKami', this.state)
    .then(res => {
      alert('Success');
    })
  }
  render() {
    const { judul_pertanyaan, kategori, deskripsi } = this.state;
    return (
      <div>
        <Header title="Hubungi Kami" />
        <Header />
        <Sidebar />

        <div className="box-table table-penjualan">
          <div className="box-top row-flex flex-space">
            <p className="judul-pertanyaan">Silahkan Masukkan Keluhan atau Laporan</p>
          </div>
          <br />
          <div className="row-flex col-2">
            <br />
            <FormControl value={judul_pertanyaan} onChange={this.onChange('judul_pertanyaan')} className="textarea" placeholder="Masukkan Judul Pertanyaan" required="true" />
            <select
              className="dropdown form-input dropdownHubungikami"
              value={kategori} onChange={this.onChange('kategori')}
              >
              <option value="10">Kategori</option>
              <option value="Pembelian">Pembelian</option>
              <option value="Penjualan">Penjualan</option>
              <option value="Pengiriman">Pengiriman</option>
            </select>
            <br />
          </div>
          <br />
          <div className="row-flex col-2">
            <FormControl value={deskripsi} onChange={this.onChange('deskripsi')} className="textarea" placeholder="Masukkan Deskripsi Pertanyaan" required="true" />
             {/* <button type="submit" className="button-secondary btn-red-dash">Upload Gambar</button> */}
          </div>
          <div>
          </div>
          <br /><br />
          <div className="row-flex col-2">
            <button onClick={this.handleSubmit} type="submit" className="button-primary btn-red-dash">Kirim</button>
            <button type="submit" className="button-secondary btn-red-dash">Batal</button>
          </div>
        </div>

      </div>

    )
  }
}
