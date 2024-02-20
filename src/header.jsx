import React, { useState } from 'react';
import './main.css'


const Header = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
      setIsOpen(!isOpen)
    }

    if (isOpen){
      document.body.classList.add('modal-active');
    }else{
      document.body.classList.remove('modal-active');
    }

    const closeModal = (event) => {
      event.stopPropagation();
      toggleMenu();
    };


  return(
    <>

        <div className='header'>
          <nav className='nav'>
            <div className='logo'><b className='clr'>ACE</b>mmanuel<span className='clr'>.</span></div>
            <ul className='has'>

              {/* <li> <a href='#Contact'><i class="ti ti-sun-filled"></i> </a></li> */}
          
              <li> <i class="ti ti-category" onClick={toggleMenu} id='menu'></i> </li>
                {isOpen && (
                  <div className='modal'>
                    <div className='overlay' onClick={toggleMenu}>
                      <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
                        <li> <a href='#Home'> <i class="ti ti-home-2"></i> </a></li>
                        <li> <a href='#About'> <i class="ti ti-user-circle"></i> </a></li>             
                        <li> <a href='#Contact'> <i class="ti ti-phone"></i> </a></li>
                        <li> <a> <i class="ti ti-x" onClick={toggleMenu} id='cancel'></i> </a></li>
                      </div>  
                    </div>
                  </div>
                )}
            </ul>

                
          </nav>
        </div>

    </>
  )

}

export default Header;

{/*  */}
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