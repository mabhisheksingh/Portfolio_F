import "./About.css";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BiLogoFacebook, BiCopyright } from "react-icons/bi";
import { projects, educations, skills } from "../../Constants/Resume.data.js";

function About() {
  // console.log(projects)

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
            <a href="#bio" className="item">
              Bio
            </a>
            <a href="#focused-section" className="item">
              Photos
            </a>
            <a href="#contact" className="item">
              Contact
            </a>
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

      <div className="resume" id="bio">
        <h1 style={{ color: "black" }}>Resume</h1>
        <div className="resume-container">
          
          {/* Project part*/}
          <div className="resume-subpart-container">
            <h2 className="resume-subpart-container-heading">
              Work Experience
            </h2>
            <div className="resume-subpart-container-body">
              {projects.map((project) => {
                return (
                  <div key={project.id} className="work-experience-projects">
                    <span className="project-years">{project.years}</span>
                    <div className="project">
                      <h3 className="project-heading">{project.heading}</h3>
                      <p className="project-body">{project.body}</p>
                      {project?.points && <ul style={{marginLeft:"10px"}}>{project.points.map( (point, index) => <li key={index} >{point}</li>)}</ul>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr />
          {/* Project part*/}
          <div className="resume-subpart-container">
            <h2 className="resume-subpart-container-heading">Education</h2>
            <div className="resume-subpart-container-body">
              {educations.map((project) => {
                return (
                  <div key={project.id} className="work-experience-projects">
                    <span className="project-years">{project.years}</span>
                    <div className="project">
                      <h3 className="project-heading">{project.heading}</h3>
                      <p className="project-body">{project.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr />
          {/*Skills and Tools*/}
          <div className="resume-subpart-container">
            <h2 className="resume-subpart-container-heading">
              Skills & Expertise
            </h2>
            <ul className="resume-subpart-container-body">
              {skills.map((skill) => {
                return (
                  <div key={skill.id} className="work-experience-projects">
                    <span className="project-years"></span>
                    {/* <div className="project"> */}
                      <li className="project"><span style={{fontWeight:"bold"}}>{skill.heading}:</span><span>{skill.body}</span></li>
                    {/* </div> */}
                  </div>
                );
              })}
            </ul>
          </div>

        </div>
      </div>

      <div className="about-contacts" id="contact">
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
