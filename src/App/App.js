import React, {useState} from 'react'
import {Link, Switch, Route, Redirect} from "react-router-dom"
import Header from '../Header/Header'
import './App.css'
import Footer from '../Footer/Footer'
import LandingPage from '../LandingPage/LandingPage'
import Home from '../Home/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <main className='App'>
      <div className='login'>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log {isLoggedIn ? "Out" : "In"}</button>
      </div>
      <Header />
      <LandingPage />
      <Footer />
    </main>
  )
}

export default App
