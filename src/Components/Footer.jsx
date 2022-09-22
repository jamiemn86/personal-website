import socialmedia from '../Assets/social-linkedin-circle-1024.webp';
import githubLogo from '../Assets/GitHub-Mark-120px-plus.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerNavs = [
    {
      href: '/about',
      name: 'About'
    },
    {
      href: '/cv',
      name: 'CV'
    },
    {
      href: '/projects',
      name: 'Projects'
    }
  ];

  return (
    <footer className="font-serif text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-14 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <div key={idx}>
            <Link
              to={item.href}
              className="link link-underline link-underline-black text-gray-600 hover:text-indigo-600"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          Built with ❤️ in 2022 using React and{' '}
          <a style={{ fontWeight: 'bolder' }} href="https://www.floatui.com/">
            Float UI.
          </a>
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/in/jmollernielsen/">
                <img
                  src={socialmedia}
                  alt="LinkedIn"
                  className="transition duration-500 hover:scale-110 ease-in-out"
                />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://github.com/jamiemn86">
                <img
                  src={githubLogo}
                  alt="GitHubLogo"
                  className="transition duration-500 hover:scale-110 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx="true">{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
