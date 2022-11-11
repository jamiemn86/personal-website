import React from 'react';
import { animated } from 'react-spring';
import '../CSS/mobilemenu.css';
import { FaHome, FaBriefcase, FaTools } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';

const navigation = [
  { title: 'Home', icon: <FaHome />, path: '/' },
  { title: 'About', icon: <FcManager />, path: '/about' },
  { title: 'CV', icon: <FaBriefcase />, path: '/cv' },
  { title: 'Projects', icon: <FaTools />, path: '/projects' }
];

export const MenuFull = ({ style }) => (
  <animated.div className="menu menu--full" style={style}>
    <nav>
      <ul className="menu-list menu-list--full">
        {navigation.map((item, idx) => {
          return (
            <div key={idx}>
              <a
                href={item.path}
                className="font-serif menu-list-item--full"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {item.title}
                &nbsp;&nbsp;
                {item.icon}
              </a>
            </div>
          );
        })}
      </ul>
    </nav>
  </animated.div>
);
