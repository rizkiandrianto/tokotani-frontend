
import axios from 'axios';

const IS_LOGGEDIN = localStorage.getItem('tokotani_login');

const Request = axios.create({
  baseURL: 'http://localhost:8080/tokotani/index.php/Tokotani/',
  headers: {
    'Content-Type': 'application/json'
  }
});

const exported = {
  IS_LOGGEDIN,
  PROFILE: IS_LOGGEDIN ? IS_LOGGEDIN : null,
  Request: Request
}

export default exported;
