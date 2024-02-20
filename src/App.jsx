import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from './header.jsx'
import Body from './body.jsx'
import About from './about.jsx';
import Skills from './Skills.jsx'
import Contact from './contact.jsx';
import Footer from './footer.jsx';
import Projects from './Projects.jsx';
import Sidebar from './Sidebar.jsx';
import './main.css'

function App() {
    return(
    <>
       <Header />
       <Body /> 
       {/* <Sidebar /> */}
       <About />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
    </>)
}

export default App
