import React from 'react'
import './Footer.css'
import { BiCopyright } from 'react-icons/bi';
function Footer() {
    return <div className="about-contacts" id="footer">
      <div className="phone">
        <h2 className="phone-heading">Phone</h2>
        <h5 className="phone-number">+91 7271058852</h5>
      </div>
      <div className="Emails">
        <h2 className="email-heading">Emails</h2>
        <h5 className="email">abhishekit13006@gmail.com</h5>
        <h5 className="email">abhishekit13006@gmail.com</h5>
      </div>
      <h4 className="copy-write">
        <BiCopyright />
        2035 by Abhishek Singh
      </h4>
    </div>;
  }

export default Footer