import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());
  
  return (
      <>
        <div className="d-flex align-items-center justify-content-between flex-column">
          <div className="footer-container">
            <div className="footer-wrap">
              <span className="bepro-logo" />
              <p className="p-small"><a className="p-small" target="_blank" href="https://taikai.network" rel="noreferrer">Developed by TAIKAI</a></p>
              <p className="p-small text-white">BEPRO © {currentYear} All rights reserved.</p>
              <p className="p-small">Code-as-a-Service Protocol</p>
              <p className="p-small">Reach out: general@bepro.network</p>
              <p className="p-small">BEPRO Services, BEPRO Protocol and BEPRO Token (BEPRO) are not available in the United States and other <a className="text-decoration-none color-blue" target="_blank" href="https://www.bepro.network/terms-and-conditions" rel="noreferrer">Excluded Jurisdictions</a></p>
            </div>
            <div className="footer-wrap">
              <h3 className="smallCaption mb-3">GET AROUND</h3>
              <ul>
                <li><Link href="/about"><a className="p-small" >About us</a></Link></li>
                <li><a className="p-small" target="_blank" href="https://taikai.network/en/careers" rel="noreferrer">Careers</a></li>
                <li><a className="p-small" target="_blank" href="https://discord.gg/9aUufhzhfm" rel="noreferrer">Discord</a></li>
                <li><a className="p-small" target="_blank" href="http://support.bepro.network" rel="noreferrer">Knowledge Base</a></li>
                <li><a className="p-small" target="_blank" href="https://support.bepro.network/en/collections/3143271-community" rel="noreferrer">Community FAQ</a></li>
                <li><a className="p-small" target="_blank" href="https://support.bepro.network/en/articles/5585549-tokenomics-distribution-schedule" rel="noreferrer">Tokenomics</a></li>
                <li><Link href="/terms-and-conditions"><a className="p-small" >Terms & Conditions</a></Link></li>
                <li><Link href="/privacy" scroll={true}><a className="p-small">Privacy policy</a></Link></li>
              </ul>
            </div>
            <div className="footer-wrap">
              <h3 className="smallCaption mb-3">OUR ECOSYSTEM</h3>
              <ul>
                <li><a className="p-small" target="_blank" href="https://bepronetwork.medium.com/" rel="noreferrer">Blog</a></li>
                <li><a className="p-small" target="_blank" href="https://github.com/bepronetwork" rel="noreferrer">Github</a></li>
                <li><a className="p-small" target="_blank" href="https://docs.bepro.network/" rel="noreferrer">Docs</a></li>
                <li><a className="p-small" target="_blank" href="https://support.bepro.network/en/collections/3143242-operators" rel="noreferrer">Start your project</a></li>
                <li><a className="p-small" target="_blank" href="https://support.bepro.network/en/collections/3143249-developers" rel="noreferrer">I am a developer</a></li>
                <li><a className="p-small" target="_blank" href="https://support.bepro.network/en/collections/3143296-bepro-holder" rel="noreferrer">I am a holder</a></li>
                <li><a className="p-small" target="_blank" href="https://github.com/bepronetwork/grants-program" rel="noreferrer">Open grants</a></li>
                <li><a className="p-small" target="_blank" href="https://twitter.com/bepronet" rel="noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
