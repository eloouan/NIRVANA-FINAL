import React from "react";

const menuButton = () => {
  return (
    <div className="wrapper">
      <input type="checkbox" />
      <div className="fab"></div>
      <div className="fac">
        <a href="#">
          <i className="fas fa-suitcase"></i>
        </a>
        <a href="#">
          <i className="far fa-file-alt"></i>
        </a>
        <a href="#">
          <i className="fas fa-wallet"></i>
        </a>
      </div>
    </div>
  );
};

export default menuButton;
