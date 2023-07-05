import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="px-48 container mx-auto py-8">
        <Link href="/" className="px-4 text-xl  hover:underline">
          Home
        </Link>

        <Link href="/posts" className="px-4 text-xl capitalize hover:underline">
          Posts
        </Link>
        <Link href="/about-me" className="px-4 text-xl  hover:underline">
          About me
        </Link>
        <a
          href="https://twitter.com/sohelcse1999"
          target="_blank"
          className="px-4 text-xl  hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://github.com/mdsohelmia"
          target="_blank"
          className="px-4 text-xl  hover:underline"
        >
          Github
        </a>
      </nav>
    </header>
  );
};

export default Header;
