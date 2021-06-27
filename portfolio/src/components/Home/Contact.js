import React from 'react';
import { contact } from '../../assets/config';
import '../../scss/contact.scss';
import { GitHub, Twitter, LinkedIn } from '@material-ui/icons/';
export default function Contact() {
  return (
    <div className="Contact">
      <h1>Get in Touch</h1>
      <div className="contact-content">
        <div>{contact.fewWords}</div>
        <div className="social">
          <a href={contact.socials.GitHub}>
            <GitHub />
          </a>
          <a href={contact.socials.Twitter} style={{ padding: '0em 1em' }}>
            <Twitter />
          </a>
          <a href={contact.socials.LinkedIn}>
            <LinkedIn />
          </a>
        </div>
        <div>
          email:{' '}
          <a href={`mailto:${contact.email}`} className="mail">
            {contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
