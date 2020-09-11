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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <main className='App'>
      <div className='login'>
        <form>
          <input 
            name='email'
            placeholder='email' />
          <input 
            name='password'
            placeholder='password' />
        </form>
          <Link to='/home'>
            <button type='submit' onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? "Out" : "In"}</button>
            </Link>
      </div>
      <Header />
      <body>
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

        </Switch>
      </body>
      <Footer />
    </main>
  )
}

export default App
