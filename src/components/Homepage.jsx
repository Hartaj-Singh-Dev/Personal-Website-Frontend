import React from "react";
import "../Styles/Homepage.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Homepage = () => {
  return (
    <React.Fragment>
      <Element id="home" name="home">
        <div className="homePage">
          <div className="name">
            <h1 className="myName">
              HARTAJ <span style={{ marginLeft: "2rem" }}>SINGH</span>
            </h1>
          </div>
          <div className="socialIcons">
            <a
              href="https://www.instagram.com/thehartajsingh/"
              target="_blank"
              rel="noreferrer"
              className="InstagramIcon"
            >
              <i class="fab fa-instagram fa-3x" id='insta'></i>
            </a>
            <a
              href="https://www.github.com/Hartaj-singh-dev"
              target="_blank"
              rel="noreferrer"
              className='GitHubIcon'
            >
              <i class="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hartaj-singh-sidhu-9068661ba/"
              target="_blank"
              rel="noreferrer"
              className="LinkedinIcon"
            >
             <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://discordapp.com/users/772455850392027147"
              target="_blank"
              rel="noreferrer"
              className="discordIcon"
            >
              <i class="fab fa-discord fa-3x"></i>
            </a>
            
          </div>
          <div className="Arrow" style={{flexDirection:'column'}}>
            <h4 style={{color:'#fcfcfc',fontSize:'12px'}}>Read More</h4>
            <Link to="about" spy={true} smooth={true} duration={100} delay={50}>
              <IconButton>
                <ArrowDownwardIcon></ArrowDownwardIcon>
              </IconButton>
            </Link>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default Homepage;
