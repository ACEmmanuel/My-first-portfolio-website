import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from './header.jsx'
import Body from './body.jsx'
import About from './about.jsx';
import './main.css'

function App() {
    return(
    <>
       <Header />
       <Body /> 
       <About />
    </>)
}

export default App
