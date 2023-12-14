import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

const AdminPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleLoginPage = () => {
    setLoginVisible(!loginVisible);
  };

  
  return (
      <div className="Logincontainer">
        <h3>ADMIN</h3>
        <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
        <div className="wrapper">
          <input type="checkbox" />
          <div className="fab"></div>
          <div className="fac">
              <Link to="/login">
                  <button onClick={toggleLoginPage} className="login-button"></button>
              </Link>
              <Link to="/"><button>Map</button></Link>
            </div>
          </div>
        </div>

        
    </div>
    

      
  );
};

export default AdminPage;

