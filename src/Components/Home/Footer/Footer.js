import React from "react";
import "../../../Styles/Footer/Footer.css";
import bg from "../../../assets/footerbg.png";
import logo from "../../../assets/logo.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = () => {
  return (
    <section style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="section footerSection">
      <div className="container footer">
        <div className="footerLeft">
          <img alt="logo" src={logo} />
          <p>Helping you acheive your fitness goals and dream body.</p>
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </div>
        </div>
        <div className="footerRight">
          <h5>get in touch</h5>
          <div className="line"></div>
          <div className="contactDetails">
            <div className="left">
              <h6>Address</h6>
              <div className="detail">
                <RoomIcon />
                <p>Nairobi, Kenya</p>
              </div>
              <div className="detail">
                <AccessTimeIcon />
                <p>Mon - Fri 8 a.m - 9 p.m</p>
              </div>
            </div>
            <div className="right">
              <h6>Contact info</h6>
              <div className="detail">
                <PhoneCallbackIcon />
                <p>+254704945784</p>
              </div>
              <div className="detail">
                <MailOutlineIcon />
                <p>denokim55@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">© Copyright xtreme inc.</p>
    </section>
  );
};

export default Footer;
