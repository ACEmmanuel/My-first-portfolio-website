import React from 'react';
import './main.css';

const Sidebar = () => {


  return (
    <div className="sidebar">
      {/* Home Icon */}
      <li> <a href='#Home'> <i class="ti ti-home-2"></i> </a></li>
      
      {/* Contact Icon */}
      <li> <a href='#About'> <i class="ti ti-user-circle"></i> </a></li>
      
      {/* Message Icon */}
      <li> <a href='#Contact'> <i class="ti ti-phone"></i> </a></li>
    </div>
  );
};

export default Sidebar;
