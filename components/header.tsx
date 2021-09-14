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
          <li><a href="https://docs.bepro.network/" target="_blank">Docs</a></li>
          <li><a href="https://github.com/bepronetwork/grants-program" target="_blank">Open Grants</a></li>
          <li><a href="https://betprotocol.notion.site/06173fb999ae45ffa9abdad80a34f336?v=5c9a061da63849afa836476e4a1d25d9" target="_blank">Roadmap</a></li>
        </ul>
      </div>
      <div className="d-flex flex-row align-items-center">
        <a className="btn btn-md btn-white" href={appLink} target="_blank">App</a>
      </div>
    </div>
  </>
}
