
import axios from 'axios';

const IS_LOGGEDIN = localStorage.getItem('tokotani_login');
const API_SERVER = 'http://localhost/tokotani';
const PROFILE = IS_LOGGEDIN ? JSON.parse(IS_LOGGEDIN) : null;
const USER_LEVEL = (level) => {
  let temp = false;
  if (IS_LOGGEDIN) {
    switch (PROFILE.level) {
      case "1":
        temp = "petani";
        break;
      case "2":
        temp = "non-petani";
        break;
      case "3":
        temp = "perusahaan";
        break;
      case "4":
        temp = "mitra";
        break;
      default:
        temp = "petani";
        break;
    }
    return temp;
  } else {
    if (level) {
      switch (level) {
        case "1":
          temp = "petani";
          break;
        case "2":
          temp = "non-petani";
          break;
        case "3":
          temp = "perusahaan";
          break;
        case "4":
          temp = "mitra";
          break;
        default:
          temp = "petani";
          break;
      }
    }
    return temp;
  }
}

const headers = {
  'Content-Type': 'application/json'
}

if (IS_LOGGEDIN) headers.Authorization = PROFILE.id_pengguna;

const Request = axios.create({
  baseURL: `${API_SERVER}/index.php/Tokotani/`,
  headers
});

const exported = {
  IS_LOGGEDIN,
  PROFILE,
  Request,
  API_SERVER,
  USER_LEVEL
}

export default exported;
