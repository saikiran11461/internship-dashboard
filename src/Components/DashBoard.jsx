import React from "react";
import "./DashBoard.css";
import logo from "../Lookscout.png"
import DarkLogo from "../Lookscout-dark.png"
import {Box} from "@chakra-ui/react"
import {
  FontAwesomeIcon,
  faFaceRelieved,
} from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faDollarSign,
  faLock,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
const DashBoard = () => {
  let theme = useContext(ThemeContext);
  let appLogo = theme.isDark? DarkLogo:logo
  return (
    <>
        <div className="logo">
          <img src={appLogo} alt="" />
        </div>
      <div className="container">
        <div className="innerContainer">
          <div className="top">
            <div className="items">
              <div className="fontBorder">
                <FontAwesomeIcon icon={faLock} height="12px" color={theme.isDark?"white" :"black"} />
                <p >Account </p>
              </div>

              <div className="fontBorder">
                <FontAwesomeIcon icon={faUser} height="12px" color={theme.isDark?"white" :"black"}  />
                <p>Personal</p>
              </div>

              <div className="fontBorder">
                <FontAwesomeIcon icon={faDollarSign} height="12px" color={theme.isDark?"white" :"black"}  />
                <p>Billing</p>
              </div>

              <div className="fontBorder">
                <FontAwesomeIcon icon={faThumbsUp} height="12px" color={theme.isDark?"white" :"black"}  />
                <p>Done</p>
              </div>
            </div>
            {/* <div className="item-text">
              
              <p>Personal</p>
              <p>Billing</p>
              <p className="lastone">Done</p>
            </div> */}
          </div>

          <div className="inputContainer">
            <div className="inputs">
              <label>Name</label> 
              <div className="input-container">
                <input className="input" type="text" placeholder="name" />
                <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
              </div>
             
              <label>Email*</label> 
              <div className="input-container">
              <input className="input" type="text" placeholder="email" />
              <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
              </div>
              <p className="input-flex-p"> Please input a real Email Address</p>
            </div>
            <div className="inputs-flex">
              <div>
                <label>Password*</label> <br />
                <div className="input-container">
                <input className="input" type="text" placeholder="Password" />
                <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
              </div>
                <p className="input-flex-p">Please enter your password</p>
              </div>
              <div>
                <label>Confirm Password*</label> <br />
                <div className="input-container">
                <input className="input" type="text" placeholder="Please confirm your Password" />
                <FontAwesomeIcon className="info-icon" icon={faCircleInfo} />
              </div>
                <p className="input-flex-p"> password need to match</p>
              </div>
            </div>
          </div>
          <div className="terms-conditions">
            <div className="terms-flex">
              <input className="checkbox" type="checkbox" />
              <span>I accept the Terms and Privacy Policy</span>
            </div>
            <div className="button-flex">
              <div></div>
              <div>
                <button>Next &gt; </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
