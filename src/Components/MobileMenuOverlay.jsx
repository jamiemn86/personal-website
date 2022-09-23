import React from 'react';
import { animated } from 'react-spring';
import '../CSS/mobilemenu.css';

const navigation = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'CV', path: '/cv' },
  { title: 'Projects', path: '/projects' }
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
              >
                {item.title}
              </a>
            </div>
          );
        })}
      </ul>
    </nav>
  </animated.div>
);
