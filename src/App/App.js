import React from 'react'
import {Link, Switch, Route} from "react-router-dom"
import Header from '../Header/Header'
import './App.css'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Home from '../Home/Home'
import Journal from '../Journal/Journal'
import Meditations from '../Meditations/Meditations'
import Resources from '../Resources/Resources'
import ContactUs from '../ContactUs/ContactUs'
import Login from '../Forms/Login'
import Logout from '../Forms/Logout'
import TokenService from '../services/token-service'
import PrivateRoute from '../utils/PrivateRoute'
import PublicRoute from '../utils/PublicRoute'

function App () {
  return (
    <main className='App'>
      <div className='login'>
      {TokenService.hasAuthToken() ? 
        <Logout /> : <Link to='/login'><button>Log In</button></Link>}
      </div>
      <Link to='/home'><Header /></Link>
        <Switch>
          <PublicRoute exact path='/' component={LandingPage}/>

          <PublicRoute path='/login' component={Login} />

          <PrivateRoute path='/home' component={Home} />

          <PrivateRoute exact path={'/journal'} component={Journal} />  

          <PrivateRoute path={'/meditations'} component={Meditations}/>
          
          <PrivateRoute path='/resources' component={Resources} />
          
          <Route path='/contact'>
            <ContactUs />
          </Route>

        </Switch>
      <Footer />
    </main>)
}
export default App
