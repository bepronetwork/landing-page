import React from 'react';

export default function Header() {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;

  return <>
    <div className="main-nav d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <a href="/" className="logo">
          <span className="bepro-logo-white"></span>
        </a>
        <ul className="nav-links">
          <li><a href="https://docs.bepro.network/">Docs</a></li>
          <li><a href="/">Grant</a></li>
        </ul>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a className="btn btn-md btn-white" href={appLink}>App</a>
      </div>
    </div>
  </>
}
