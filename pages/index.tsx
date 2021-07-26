import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';

export default function Home() {
  return (
      <>
        <div className="main-nav d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <a href="/">
              <img
                className="logo"
                src="https://64.media.tumblr.com/3cf2d2b58643cb6f46b42a652771b73b/e8afc16b16e16514-bc/s250x400/191e77982d8901585030f596d3e90935d42099ed.png"
                alt=""
              />
            </a>
            <ul className="nav-links">
              <li><a href="/">Docs</a></li>
              <li><a href="/">Grant</a></li>
            </ul>
          </div>
          <div className="d-flex flex-row align-items-center">
            <button className="btn btn-md btn-white">App</button>
          </div>
        </div>

        <div className="landing-hero bg-blue">
          <h1 className="h1 text-white">Use bepro.network to do merges</h1>
          <div className="slides">
            <div className="slide-1"></div>
            <div className="slide-2"></div>
          </div>
        </div>

        <div className="d-flex bg-blue align-items-center justify-content-between cols">
          <div className="col-content">
            <h3 className="h3 text-white">Welcome to bepro-js network</h3>
          </div>
          <div className="col-content bg-shade">
            <p className="smallCaption">Build the future of Web3</p>
            <p className="p">Built around the BEPRO token, a utility token that enables token holders to manage disputes in the network, participate in it, and earn token rewards by curating the system & providing development resources.</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">DEVELOPERS</p>
            <h4 className="h4 text-white">Find issues to work</h4>
            <p className="p">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h3 text-white">+30</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h3 text-white">300K</h3>
                <p className="p-small">$USD</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols reverse bg">
          <div className="col-content bg-shade">
            <p className="smallCaption">CURATION</p>
            <h4 className="h4 text-white">Curate the system</h4>
            <p className="p">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div className="col-content">
            <div className="net-stats d-flex align-items-center justify-content-center">
              <div className="item text-center mr-3">
                <h3 className="h3 text-white">+30</h3>
                <p className="p-small">Open issues</p>
              </div>
              <div className="item text-center">
                <h3 className="h3 text-white">+30</h3>
                <p className="p-small">$BEPRO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between cols">

        </div>

      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
