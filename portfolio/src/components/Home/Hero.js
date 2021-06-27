import React from 'react';
import { about } from '../../assets/config';
export default function Hero() {
  return (
    <div className="Hero">
      <h1>{`${about.firstName} ${about.lastName}`}</h1>
      <div className="tags">{about.tags.join(' | ')}</div>
      <a href="#about" className="cta">
        More about me
      </a>
    </div>
  );
}
