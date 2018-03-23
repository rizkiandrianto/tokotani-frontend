import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LayoutMaster from './components/App';
import registerServiceWorker from './services/registerServiceWorker';

//cssstuff
import './css/index.css';

render((
  <BrowserRouter>
    <LayoutMaster />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();