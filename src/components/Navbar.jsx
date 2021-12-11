import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  const NavLink = ({ text, url }) => (
    <>
      <Link href={url}>
        <a
          onClick={handleClick}
          className="mx-2 lg:inline-flex lg:w-auto w-full px-3 py-1 rounded text-gray-500 font-bold items-center justify-center hover:bg-gray-600"
        >
          {text}
        </a>
      </Link>
    </>
  );

  return (
    <>
      <section id="nav" className={styles.nav + ' flex items-center flex-wrap md:p-3'} >
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <span className="text-xl text-primary font-bold uppercase tracking-wide"> PATIALA </span>
          </a>
        </Link>
        <button
          className={`${styles.menuBtn} text-gray-500 inline-flex p-3 hover:bg-green-600 rounded lg:hidden ml-auto hover:text-white outline-none`}
          onClick={handleClick}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div
            className={`${styles.links} lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}
          >
            <NavLink text="Home" url="/" />
            <NavLink text="History" url="/history" />
            <NavLink text="Places" url="/places" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
