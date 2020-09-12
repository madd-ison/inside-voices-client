import React, {useState} from 'react'
import {Link, Switch, Route, Redirect} from "react-router-dom"
import Header from '../Header/Header'
import './App.css'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Home from '../Home/Home'
import Journal from '../Journal/Journal'
import Meditations from '../Meditations/Meditations'
import Resources from '../Resources/Resources'
import store from '../store'
import {v4 as uuid} from 'uuid'
import Context from '../Context'
import ContactUs from '../ContactUs/ContactUs'

const signUpUser = async (user) => {
  const id = uuid()
  store.users.push({...user, id})
  return user
}

const loginUser = async (username, password) => {
  return store.users.find(user => user.username === username.trim().toLowerCase() && user.password === password.trim())
}

const AppContext = React.createContext(Context)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <main className='App'>
    <AppContext.Provider value={{...Context, signUpUser, loginUser}}>
      <div className='login'>
        <form>
          <input 
            name='username'
            placeholder='Email' />
          <input 
            name='password'
            placeholder='Password' />
        </form>
          <Link to='/home'>
            <button type='submit' onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? "Out" : "In"}</button>
            </Link>
      </div>
      <Link to='/home'><Header /></Link>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route path='/home'>
            {isLoggedIn ? <Home /> : <Redirect to='/' />}
          </Route>

          <Route path='/journal'>
            <Journal />
          </Route>

          <Route path='/meditations'>
            <Meditations />
          </Route>
          
          <Route path='/resources'>
            <Resources />
          </Route>
          
          <Route path='/contact'>
            <ContactUs />
          </Route>

        </Switch>
      <Footer />
      </AppContext.Provider>
    </main>
  )
}

export default App
