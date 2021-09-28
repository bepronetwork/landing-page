import React from 'react';
import Link from 'next/link';
import BeproLogo from '../assets/bepro-logo';

export default function Header() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;

  const navLink = (href, label, className = ``) => ({href, label, className});
  const navLinks = [
    navLink(`https://docs.bepro.network/`, `Docs`),
    navLink(`https://github.com/bepronetwork/grants-program`, `Open Grants`, `d-none d-sm-inline`),
    navLink(`https://betprotocol.notion.site/06173fb999ae45ffa9abdad80a34f336?v=5c9a061da63849afa836476e4a1d25d9`, `Roadmap`),
    navLink(`https://docs.bepro.network/sdk-documentation/why-bepro-js`, `BEPRO.js SDK (Web3 API)`, `d-none d-sm-inline`),
  ]

  function renderNavLink({href, label, className}, i) {
    return <li><a href={href} className={className} target="_blank" key={i}>{label}</a></li>
  }

  return <div className="main-nav d-flex align-items-center justify-content-between fixed-top">
    <div className="d-flex">
      <Link href="/">
        <a><BeproLogo aria-hidden={true} /></a>
      </Link>
      <ul className="nav-links">
        {navLinks.map(renderNavLink)}
      </ul>
    </div>
    <div className="d-flex flex-row align-items-center">
      <a className="btn btn-md btn-white" href={appLink} target="_blank">App</a>
    </div>
  </div>
}
