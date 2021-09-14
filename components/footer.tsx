import { GetStaticProps } from 'next'
import React from 'react';
import Link from 'next/link';


export default function Footer() {

  return (
      <>

        <div className="d-flex align-items-center justify-content-between flex-column">
          <div className="footer-container">
            <div className="footer-wrap">
              <span className="bepro-logo"></span>
              <p className="p-small">@Built in 🇵🇹</p>
              <p className="p-small text-white">BEPRO © 2021 All rights reserved.</p>
              <p className="p-small">Code As A Service for Next Generation Gaming Apps</p>
              <p className="p-small">Reach out: general@bepro.network</p>
              <p className="p-small">BEPRO Services, BEPRO Protocol and BEPRO Token (BEPRO) are not available in the United States and other Excluded Jurisdictions</p>
              <p className="p-small">BEPRO Services, BEPRO Protocol and BEPRO Token (BEPRO) are not available in the United States and other Excluded Jurisdictions</p>
            </div>
            <div className="footer-wrap">
              <h3 className="smallCaption mb-3">GET AROUND</h3>
              <ul>
                <li><Link href="/about"><a className="p-small" >About us</a></Link></li>
                <li><a className="p-small" target="_blank" href="https://t.me/betprotocol">Telegram</a></li>
                <li><a className="p-small" target="_blank" href="https://discord.gg/twqhwnStGz">Discord</a></li>
                <li><a className="p-small" target="_blank" href="https://bepronetwork.medium.com/">Blog</a></li>
                <li><Link href="/terms"><a className="p-small" >Terms of use</a></Link></li>
                <li><Link href="/privacy" scroll={true}><a className="p-small">Privacy policy</a></Link></li>
              </ul>
            </div>
            <div className="footer-wrap">
              <h3 className="smallCaption mb-3">Our Tech</h3>
              <ul>
                <li><a className="p-small" target="_blank" href="https://github.com/bepronetwork">Github</a></li>
                <li><a className="p-small" target="_blank" href="https://docs.bepro.network/">Docs</a></li>
                <li><a className="p-small" target="_blank" href="https://docs.bepro.network/getting-started/how-to-use-alpha">Start your project</a></li>
                <li><a className="p-small" target="_blank" href="https://docs.bepro.network/sdk-documentation/technical-support">I am a developer</a></li>
                <li><a className="p-small" target="_blank" href="https://docs.bepro.network/getting-started/the-network">I am a curator</a></li>
                <li><a className="p-small" target="_blank" href="https://github.com/bepronetwork/grants-program">Open grants</a></li>
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
