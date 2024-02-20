import React, { useState } from 'react';
import './main.css'


const Header = () =>{

    const [isOpen, setIsOpen] = useState(true);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };



  return(
    <>

        <div className='header'>
          <nav className='nav'>
            <div className='logo'><b className='clr'>ACE</b>mmanuel<span className='clr'>.</span></div>
            <ul className='has'>

              {/* <li> <a href='#Contact'><i class="ti ti-sun-filled"></i> </a></li> */}

              <li><a href='#Contact'> <i class="ti ti-category"></i> </a></li>

            </ul>

                
                {/* <div className="dropdown-container">
                  {isOpen ? (
                    <i className="fa-solid fa-xmark" onClick={toggleMenu} id='close'></i>
                  ) : (
                    <i className="fa fa-bars" id='menu' onClick={toggleMenu}></i>
                  )}
                  {isOpen && (
                    <div className="dropdown-content">
                      <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                      </ul>
                    </div>
                  )}
                </div> */}
          </nav>
        </div>

    </>
  )

}

export default Header;

{/*  */}