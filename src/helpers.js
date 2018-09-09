
import axios from 'axios';

const IS_LOGGEDIN = localStorage.getItem('tokotani_login');
const API_SERVER = 'http://localhost/tokotani';

const Request = axios.create({
  baseURL: `${API_SERVER}/index.php/Tokotani/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

const exported = {
  IS_LOGGEDIN,
  PROFILE: IS_LOGGEDIN ? JSON.parse(IS_LOGGEDIN) : null,
  Request: Request,
  API_SERVER
}

export default exported;
