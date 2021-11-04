import { useState } from 'react'
import Link from 'next/link'
import { Nav, Navbar } from 'react-bootstrap'

import Button from './button'
import CTAModal from './cta-modal'

import BeproLogo from '../assets/bepro-logo'
import ExternallinkIcon from '../assets/icons/externallink-icon'

export default function MainNav() {
  const [showModal, setShowModal] = useState(false)
  const navLink = (href, label) => ({ href, label })

  const navLinks = [
    navLink(`https://docs.bepro.network/`, `Docs`),
    navLink(`https://github.com/bepronetwork/grants-program`, `Open Grants`),
    navLink(
      `https://betprotocol.notion.site/06173fb999ae45ffa9abdad80a34f336?v=5c9a061da63849afa836476e4a1d25d9`,
      `Roadmap`
    ),
    navLink(
      `https://docs.bepro.network/sdk-documentation/why-bepro-js`,
      `BEPRO.js SDK (Web3 API)`
    )
  ]

  function renderNavLink({ href, label }, i) {
    return (
      <Nav.Link href={href} target="_blank" key={i}>
        {label}
      </Nav.Link>
    )
  }

  return (
    <>
      <Navbar expand="md" fixed="top" collapseOnSelect>
        <Navbar.Brand>
          <Link href="/">
            <a>
              <BeproLogo aria-hidden={true} />
            </a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" as="a" />

        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            {navLinks.map(renderNavLink)}
          </Nav>

          <Nav>
            <Button
                className="btn-nav"
                color="white"
                onClick={() => setShowModal(true)}
              >
                Development dao{' '}
                <ExternallinkIcon className="ms-2" width={12} height={12} />
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <CTAModal showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
