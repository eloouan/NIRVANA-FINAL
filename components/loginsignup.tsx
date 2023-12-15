// @refresh disable

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useAuth } from "../pages/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Image from "next/image";

const LoginSignup = () => {
  const navigate = useNavigate();
  const { isLogged, isAdmin, userId, setisLogged, setuserId, setisAdmin } =
    useAuth();
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleLoginPage = () => {
    setLoginVisible(!loginVisible);
  };

  const checkUser = () => {
    const nameElement = document.querySelector(
      "#name"
    ) as HTMLInputElement | null;
    const passwordElement = document.querySelector(
      "#password"
    ) as HTMLInputElement | null;
    let name = "";
    let password = "";

    if (nameElement && passwordElement) {
      name = nameElement.value;
      password = passwordElement.value;
    }
    console.log(name);
    console.log(password);
    axios
      .get(
        "https://l1.dptinfo-usmb.fr/~grp11/Tests/connexion2.php?+name=" +
          name +
          "&password=" +
          password
      )
      .then((response) => {
        if (response.data.loginSuccessful) {
          setisLogged(true);
          setuserId(response.data.user_id);
          if (response.data.isadmin) {
            setisAdmin(true);
          }
          navigate("/");
        } else {
          toast.error("Identifiant ou mot de passe incorrect ", {
            description: "Veuillez saisir à nouveaux vos logs",
          });
        }
      });
  };
  const checkUserRegister = () => {
    const nameElement = document.querySelector(
      "#name1"
    ) as HTMLInputElement | null;
    const passwordElement = document.querySelector(
      "#password1"
    ) as HTMLInputElement | null;
    let name = "";
    let password = "";

    if (nameElement && passwordElement) {
      name = nameElement.value;
      password = passwordElement.value;
    }

    if (name != "" && password != "") {
      console.log(name);
      console.log(password);
      axios
        .get(
          "https://l1.dptinfo-usmb.fr/~grp11/Tests/inscription.php?+name=" +
            name +
            "&password=" +
            password
        )
        .then((response) => {
          console.log(response.data);
          if (!response.data) {
            toggleLoginPage();
          } else {
            toast.error("Utilisateur déjà existant ", {
              description: "Veuillez changer de name",
            });
          }
        });
    }
  };
  return (
    <div>
      <div className="Logincontainer">
        <Toaster richColors position="top-center" />
        {loginVisible && (
          <div className="Loginheader">
            <h3>☃️ Login 🎄</h3>
            <div className="Logininputs">
              <div className="Loginusername">
                <Image
                  className="person"
                  src="/jumping-santa.png"
                  width={28}
                  height={27}
                  alt=""
                  title="SANTA IS BHOPPING"
                />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="Loginpassword">
                <Image
                  className="password"
                  src="/xmas-locked.png"
                  width={30}
                  height={29}
                  alt=""
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="Loginbuttons">
              <div className="Loginremember">
                <input type="checkbox" className="Logincheckbox" />
                <p>Remember me</p>
              </div>
              <p>Forgot Password</p>
            </div>
            <div className="Loginbtn-box">
              <a onClick={checkUser}>Login</a>
            </div>
            <div className="Loginregister">
              <p>
                Don t have an account?
                <span onClick={toggleLoginPage}> Register</span>
              </p>
            </div>
          </div>
        )}
        {!loginVisible && (
          <div className="Loginheader">
            <h3>🤶🏿Register</h3>
            <div className="Logininputs">
              <div className="Loginusername">
                <Image
                  className="person"
                  src="/candy-cane.png"
                  width={28}
                  height={27}
                  alt=""
                  title="SANTA IS BHOPPING"
                />
                <input
                  id="name1"
                  name="name1"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="Loginpassword">
                <Image
                  className="password"
                  src="/xmas-locked.png"
                  width={30}
                  height={29}
                  alt=""
                />
                <input
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="Loginbuttons">
              <div className="Loginremember">
                <input type="checkbox" className="Logincheckbox" />
                <p>Remember me</p>
              </div>
              <p>Forgot Password</p>
            </div>
            <div className="Loginbtn-box">
              <a onClick={checkUserRegister}>Register</a>
            </div>
            <div className="Loginregister">
              <p>
                Already have an account?
                <span onClick={toggleLoginPage}> Login</span>
              </p>
            </div>
          </div>
        )}
        <div className="menu-button" style={{ bottom: "20px", right: "10px" }}>
          <div className="wrapper">
            <input type="checkbox" />
            <div className="fab"></div>
            <div className="fac">
              <Link to="/">
                <button className="button-map-back-to-menu">
                  <Image className="" src="" width={20} height={20} alt="" />
                </button>
              </Link>
              <Link to="/admin">
                <button className="admin-button-2">🤓</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
