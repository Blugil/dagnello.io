import * as React from 'react';
import Menu from './menu/menu';
import './profile.css';

import blugil from '../../images/blugil.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

function Profile() {
  return (
    <div className="container profilecard">
      <img className="profileimage" alt="profile" src={blugil} />
      <h1>Dominick Agnello</h1>
      <p>
        I'm a graduated Computer Science major who's worked doing full stack development at <a href="https://launchdarkly.com/"><span>LaunchDarkly</span></a> and <a href="https://www.atpco.net/"><span>ATPCO</span></a>. I'm currently interested in: Linux, open
        source, Rust, and graphics programming.
      </p>
      <ul className="list">
        <li>
          <a href="https://github.com/Blugil" rel="noreferrer" target="_blank">
            <img className="listimage" alt="github link" src={github} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dominickagnello/"
            rel="noreferrer"
            target="_blank"
          >
            <img className="listimage" alt="linkedin link" src={linkedin} />
          </a>
        </li>
      </ul>
      <Menu />
    </div>
  );
}

export default Profile;
