import React from 'react';
import './main.css'


const Header = () =>{
  return(
    <>
    <div className='header'>
    <nav className='nav'>
    <div className='logo'><b>ACE</b>mmanuel</div>
    <ul className='has'>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      <li></li>
    </ul>
    <i class="fa fa-bars" id='ham'></i>
    </nav>
    
    </div>
    {/* <hr></hr> */}
   
    </>
  )

}

export default Header;

{/*  */}