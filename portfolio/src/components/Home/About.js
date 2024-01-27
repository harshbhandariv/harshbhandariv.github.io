import React from 'react';
import { about } from '../../assets/config';
import photo from '../../assets/profilePhoto.jpg';
import '../../scss/about.scss';
export default function About() {
  const aboutme = {
    __html: about.aboutme
  }
  return (
    <div className="About" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="profileDiv">
          <img src={photo} alt={`${about.firstName}`} />
        </div>
        <div className="profileAboutDiv" dangerouslySetInnerHTML={aboutme} />
      </div>
    </div>
  );
}
