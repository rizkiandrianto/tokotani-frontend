import React from 'react'
import { Switch, Route } from 'react-router-dom'
import headerDashboard from '../components/partial/headerDashboard'
import home from '../components/page/Home'
import login from '../components/page/Login'
import register from '../components/page/Register'
import lupakatasandi from '../components/page/lupakatasandi'
import gantikatasandi from '../components/page/gantikatasandi'


import hubungiKamiNonPetani from '../components/page/non-petani/hubungiKami'
import pesanNonPetani from '../components/page/non-petani/pesan'

import penjualanPetani from '../components/page/petani/penjualan'
import mitraPetani from '../components/page/petani/mitraPetani'
import hubungiKamiPetani from '../components/page/petani/hubungiKami'
import transPenjualanPetani from '../components/page/petani/transPenjualan'
import pesanPetani from '../components/page/petani/pesan'

import penjualanMitra from '../components/page/mitra/penjualan'
import hubungiKamiMitra from '../components/page/mitra/hubungiKami'
import transPenjualanMitra from '../components/page/mitra/transPenjualan'
import mitraBerjejaring from '../components/page/mitra/mitraBerjejaring'
import pesanMitra from '../components/page/mitra/pesan'

import penjualanPerusahaan from '../components/page/perusahaan/penjualan'
import hubungiKamiPerusahaan from '../components/page/perusahaan/hubungiKami'
import transPenjualanPerusahaan from '../components/page/perusahaan/transPenjualan'
import pesanPerusahaan from '../components/page/perusahaan/pesan'

import helpers from '../helpers'

const { IS_LOGGEDIN } = helpers;

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const renderHome = () => {
  return penjualanPetani;
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={IS_LOGGEDIN ? renderHome() : login}/>
      <Route exact path='/home' component={home}/>
      <Route path='/login' component={login}/>
      <Route path='/register' component={register}/>
      <Route path='/lupaPassword' component={lupakatasandi}/>
      <Route path='/gantikatasandi' component={gantikatasandi}/>


      <Route path='/non-petani/hubungiKami' component={hubungiKamiNonPetani}/>
      <Route path='/non-petani/pesan' component={pesanNonPetani}/>

      <Route path='/petani/penjualan' component={penjualanPetani}/>
      <Route path='/petani/mitrapetani' component={mitraPetani}/>
      <Route path='/petani/hubungiKami' component={hubungiKamiPetani}/>
      <Route path='/petani/transPenjualan' component={transPenjualanPetani}/>
      <Route path='/petani/pesan' component={pesanPetani}/>


      <Route path='/mitra/penjualan' component={penjualanMitra}/>
      <Route path='/mitra/mitraBerjejaring' component={mitraBerjejaring}/>
      <Route path='/mitra/hubungiKami' component={hubungiKamiMitra}/>
      <Route path='/mitra/transPenjualan' component={transPenjualanMitra}/>

      <Route path='/perusahaan/penjualan' component={penjualanPerusahaan}/>
      <Route path='/perusahaan/hubungiKami' component={hubungiKamiPerusahaan}/>
      <Route path='/perusahaan/pesan' component={pesanPerusahaan}/>
      <Route path='/perusahaan/transPenjualan' component={transPenjualanPerusahaan}/>



    </Switch>
  </main>
)

export default Main;
