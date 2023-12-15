import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleLoginPage = () => {
    setLoginVisible(!loginVisible);
  };

  const [headerText, setHeaderText] = useState(
    "Sami, Natal, Enzo et Elouan - NIRVANA"
  );

  const changeHeaderText = () => {
    setHeaderText("ON A REUSSI LETS GOOOOOO");
  };

  return (
    <div className="Logincontainer">
      <h3>{headerText}</h3>
      <img
        src="/Gigachad.png"
        alt=""
        style={{ width: "300px", height: "500px" }}
      />
      <button onClick={changeHeaderText}>sacré bleu</button>

      {/* Additional button, remove if not needed */}
      {/* <button>sacré bleu</button> */}

      <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
        <div className="wrapper">
          <input type="checkbox" />
          <div className="fab"></div>
          <div className="fac">
            <Link to="/login">
              <button
                onClick={toggleLoginPage}
                className="login-button"
              ></button>
            </Link>
            <Link to="/">
              <button className="button-map-back-to-menu-2"></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
