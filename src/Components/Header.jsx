import { useState } from 'react';
import internet from '../Assets/internet.png';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { MenuFull } from './MobileMenuOverlay';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [fullMenuVisible, setFullMenuVisible] = useState(false);
  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
  });

  const navigation = [
    { title: 'About', path: '/about' },
    { title: 'CV', path: '/cv' },
    { title: 'Projects', path: '/projects' }
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <img
              src={internet}
              width={120}
              height={50}
              alt="Float UI logo"
              className="transition duration-500 hover:scale-110 ease-in-out"
            />
          </a>
          <div className={`menu-button menu-button--full md:hidden ${fullMenuVisible && 'menu-button-white'}`}>
            <Hamburger
              onToggle={() => {
                setFullMenuVisible(!fullMenuVisible);
              }}
            />
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-12 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link
                    to={item.path}
                    className="link link-underline link-underline-black text-gray-600 hover:text-indigo-600"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="https://www.linkedin.com/in/jmollernielsen/"
            className="transition duration-500 py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
          >
            Get in touch
          </a>
        </div>
      </div>
      <MenuFull style={fullMenuAnimation} />
    </nav>
  );
};

export default Header;
