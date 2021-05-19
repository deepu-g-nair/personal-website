import React from "react";
import { Parallax } from "react-parallax";
import bg from "../assets/contact-bg.png";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <Parallax bgImage={bg} strength={400} className="contact">
      <div className="contact-title">
        <p>CONTACT</p>
      </div>
      <div className="contact-body">
        <div className="body-main">
          <input type="text" placeholder="Enter name" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Enter email" />
        </div>
        <div className="body-area">
          <input type="text" placeholder="Enter message" />
        </div>
        <button>Send</button>
      </div>
    </Parallax>
  );
};

export default Contact;
