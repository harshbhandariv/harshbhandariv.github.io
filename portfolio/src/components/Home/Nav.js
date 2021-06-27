import React, { useRef } from 'react';
import '../../scss/nav.scss';
import Pdf from '../../assets/HarshVBhandari_Resume_JUNE2020.pdf';
import { about } from '../../assets/config.js';

export default function Nav() {
  const navListRef = useRef(null);
  return (
    <nav>
      <div className="nav-content">
        <a href="#home" className="name">
          {`<${about.firstName} />`}
        </a>
        <ul ref={navListRef}>
          <li>
            <a href={Pdf} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
        </ul>
      </div>
      <div
        className="burger"
        onClick={() => navListRef.current.classList.toggle('show')}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
