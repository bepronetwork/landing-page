import { kebabCase } from "lodash";
import { Modal } from "react-bootstrap";
import CloseIcon from "../assets/icons/close-icon";
import ExternalLinkIcon from "../assets/icons/externallink-icon";
import Button from "./button";

interface ICTAModal{
  showModal: boolean,
  onClose: ()=> void;
}
export default function CTAModal({
  showModal = false,
  onClose,
}: ICTAModal) {
  const appLink = process.env.NEXT_PUBLIC_APP_URL;
  return (
    <div>
      <Modal
        id={`${kebabCase("CTA")}-modal`}
        aria-labelledby={`${kebabCase("CTA")}-modal`}
        aria-describedby={`${kebabCase("CTA")}-modal`}
        centered
        show={showModal}
        >
        <Modal.Header className="relative d-flex w-100 justify-content-center">
          <Modal.Title><h3 className="h3 text-white bg-opacity-100">Leaving Website</h3></Modal.Title>
          <Button transparent className="p-1 position-absolute btn-modal-close" onClick={onClose}><CloseIcon color='gray' height={10} width={10} /></Button>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center px-3">
            <p className="text-white mb-0 mt-4 text-right family-inter fs-small">
              The Bepro Network Protocol is a decentralized protocol deployed in Moonriver created by BetBlock Technology LDA, this protocol is a tool to attach in Git Protocol Centralized SDKs to create incentives for developers to decentralize development in a liquid manner and with scale.
            </p>
            <p className="text-white-50 mb-0 mt-4 text-right family-inter fs-small">
              By joining the website you agree to the <a href="https://www.bepro.network/terms-and-conditions" className="text-primary bg-opacity-100" target="_blank">Terms & Conditions</a>, including not being in an excluded jurisdiction and you accept the Risks of using experimental technology in the Moonriver EVM
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-row justify-content-between align-items-center p-3 pt-0">
            <a className="text-decoration-none" href={appLink} target="_blank">
              <Button color="primary" className="me-1" onClick={onClose}>go to development dao <ExternalLinkIcon className="ms-2" width={12} height={12} /></Button>
            </a>
            <Button color="dark-gray" className="ms-3" onClick={onClose}>cancel</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
