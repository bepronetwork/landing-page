import type { NextPage } from "next";
import SiteHead from "components/SiteHead";
import Nav from "components/Nav";
import TermsAndConditions from "components/TermsAndConditions";
import Footer from "components/Footer";

const Terms: NextPage = () => (
  <>
    <SiteHead />
    <Nav />
    <TermsAndConditions />
    <Footer />
  </>
);

export default Terms;
