import React, { Component } from 'react';
import Header from './partial/Header'
import Main from '../routes/index'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
