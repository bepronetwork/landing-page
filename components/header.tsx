import React, { useState } from 'react';
import Link from 'next/link';
import BeproLogo from '../assets/bepro-logo';
import Button from './button';
import ExternalLinkIcon from '../assets/icons/externallink-icon';
import CTAModal from './cta-modal';

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const navLink = (href, label, className = ``) => ({href, label, className});
  const navLinks = [
    navLink(`https://docs.bepro.network/`, `Docs`, `text-decoration-none opacity-75 opacity-100-hover border-0`),
    navLink(`https://github.com/bepronetwork/grants-program`, `Open Grants`, `d-none d-sm-inline text-decoration-none opacity-75 opacity-100-hover border-0`),
    navLink(`https://betprotocol.notion.site/06173fb999ae45ffa9abdad80a34f336?v=5c9a061da63849afa836476e4a1d25d9`, `Roadmap`, `text-decoration-none opacity-75 opacity-100-hover border-0`),
    navLink(`https://docs.bepro.network/sdk-documentation/why-bepro-js`, `BEPRO.js SDK (Web3 API)`, `d-none d-sm-inline text-decoration-none opacity-75 opacity-100-hover border-0`),
  ]

  function renderNavLink({href, label, className}, i) {
    return <li><a href={href} className={className} target="_blank" key={i}>{label}</a></li>
  }

  return (
    <>
      <div className="main-nav d-flex align-items-center justify-content-between fixed-top">
        <div className="d-flex">
          <Link href="/">
            <a><BeproLogo aria-hidden={true} /></a>
          </Link>
          <ul className="nav-links">
            {navLinks.map(renderNavLink)}
          </ul>
        </div>
        <div className="d-flex flex-row align-items-center">
          <Button className='btn-nav' color='white' onClick={() => setShowModal(true)}>Development dao <ExternalLinkIcon className='ms-2' width={12} height={12} /></Button>
        </div>
      </div>
      <CTAModal showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
