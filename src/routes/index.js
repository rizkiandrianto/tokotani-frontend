import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
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

const { IS_LOGGEDIN, PROFILE, USER_LEVEL } = helpers;


/*
  ======================= DOKUMENTASI

  USER LEVEL
  1 = PETANI
  2 = NON_PETANI
  3 = PERUSAHAAN
  4 = MITRA
 */

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const renderHome = () => {
  switch (PROFILE.level) {
    case '1':
      return penjualanPetani;
    case '2':
      return hubungiKamiNonPetani;
    case '3':
      return penjualanPerusahaan;
    case '4':
      return penjualanMitra;
    default:
      break;
  }
  return ;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        if (IS_LOGGEDIN) {
          if (props.location.pathname.startsWith(`/${USER_LEVEL()}`)) {
            return <Component {...props} />
          }

          return <Redirect to={{
            pathname: `/${USER_LEVEL()}/penjualan`,
            state: {
              from: props.location
            }
          }} />
        }
        return (
          <Redirect to={{
            pathname: '/login',
            state: {
              from: props.location
            }
          }} />
        )
    }
    } />
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={IS_LOGGEDIN ? renderHome() : login}/>
      <Route exact path='/home' component={home}/>
      <Route path='/login' component={login}/>
      <Route path='/register' component={register}/>
      <Route path='/lupaPassword' component={lupakatasandi}/>
      <Route path='/gantikatasandi' component={gantikatasandi}/>


      <PrivateRoute path='/non-petani/hubungiKami' component={hubungiKamiPetani}/>
      <PrivateRoute path='/non-petani/pesan' component={pesanNonPetani}/>

      <PrivateRoute path='/petani/penjualan' component={penjualanPetani}/>
      <PrivateRoute path='/petani/mitra' component={mitraPetani}/>
      <PrivateRoute path='/petani/hubungiKami' component={hubungiKamiPetani}/>
      <PrivateRoute path='/petani/transPenjualan' component={transPenjualanPetani}/>
      <PrivateRoute path='/petani/pesan' component={pesanPetani}/>


      <PrivateRoute path='/mitra/penjualan' component={penjualanPetani}/>
      <PrivateRoute path='/mitra/mitra' component={mitraBerjejaring}/>
      <PrivateRoute path='/mitra/hubungiKami' component={hubungiKamiPetani}/>
      <PrivateRoute path='/mitra/transPenjualan' component={transPenjualanPetani}/>

      <PrivateRoute path='/perusahaan/penjualan' component={penjualanPetani}/>
      <PrivateRoute path='/perusahaan/hubungiKami' component={hubungiKamiPetani}/>
      <PrivateRoute path='/perusahaan/pesan' component={pesanPerusahaan}/>
      <PrivateRoute path='/perusahaan/transPenjualan' component={transPenjualanPetani}/>



    </Switch>
  </main>
)

export default Main;
