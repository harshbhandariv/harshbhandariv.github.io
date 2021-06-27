import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import '../../scss/hero.scss';
export default function Home() {
  return (
    <div className="Home" id="home">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
