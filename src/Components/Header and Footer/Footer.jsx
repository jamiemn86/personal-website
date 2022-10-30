import linkedInLogo from '../../Assets/Header and Footer/LinkedInIconCircle.svg.png';
import githubLogo from '../../Assets/Header and Footer/GitHub-Mark-120px-plus.png';
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
    <footer className="font-serif text-gray-500 bg-white px-4 py-11 max-w-screen-xl mx-auto text-center">
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
        <div className="mt-6 sm:mt-0 flex flex-col items-center">
          <ul className="flex items-center space-x-8">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/jmollernielsen/"
                className="transition duration-500 group hover:scale-110 ease-in-out"
              >
                <img src={linkedInLogo} alt="GitHubLogo" />
                <div className="absolute top-0 -inset-full h-1/16 w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a
                href="https://github.com/jamiemn86"
                className="transition duration-500 group hover:scale-110 ease-in-out"
              >
                <img src={githubLogo} alt="GitHubLogo" />
                <div className="absolute top-0 -inset-full h-1/16 w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
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
