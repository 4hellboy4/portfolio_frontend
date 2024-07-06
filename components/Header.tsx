import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <Image src="/images/hellboy.png" alt="logo" width={100} height={100} className="logo" />

      <nav>
        <ul className="nav__links">
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/comic">Comic</Link></li>
        </ul>
      </nav>
      <Link href="/" className="cta">Home</Link>
    </header>
  );
};

export default Header;
