import "./About.css";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebook, BiCopyright } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import profilePic from "../../assets/profile.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-sidebar-container">
        <div className="about-sidebar">
          <span className="facebook">
            <a href="https://github.com/mabhisheksingh" target="_blank">
              <BiLogoFacebook size={"22px"} />
            </a>
          </span>
          <span className="twitter">
            <a href="https://github.com/mabhisheksingh" target="_blank">
              <AiOutlineTwitter size={"22px"} />
            </a>
          </span>
          <span className="instagram">
            <a href="https://github.com/mabhisheksingh" target="_blank">
              <AiOutlineInstagram size={"22px"} />
            </a>
          </span>
          <span className="youtube">
            <a href="https://github.com/mabhisheksingh" target="_blank">
              <AiFillYoutube size={"22px"} />
            </a>
          </span>
        </div>
      </div>
      
      <div className="about-profile">
        <div className="about-profile-left">
          <h3 className="heading">Abhishek Singh</h3>
          <div className="menu-bar">
            <a href="#focused-section" className="item">Bio</a>
            <a href="#focused-section" className="item">Photos</a>
            <a href="#focused-contact" className="item">Contact</a>
          </div>
          <div className="main-bio-content">
            <h2 className="main-bio-heading">Hey, I'm</h2>
            <h1 className="main-bio">Abhishek Singh</h1>
            <h4 className="main-bio-designation">
              Senior Software Engineer/Full Stack Developer
            </h4>
          </div>
        </div>
        <div className="about-profile-right"></div>
      </div>
      
      <div className="resume">

        
      </div>
      
      <div className="about-photos">
      </div>

      <div className="about-contacts" id="focused-contact">
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
      </div>
    </div>
  );
}

export default About;
