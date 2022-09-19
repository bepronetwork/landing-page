import Navbar from "@/ui/NavBar";

const menu = [
  {
    label: "Organizations",
    url: "#0",
  },
  {
    label: "Developers",
    url: "#0",
  },
  {
    label: "Explore Bounties",
    url: "#0",
  },
  {
    label: "Blog",
    url: "#0",
  },
];

const Nav = () => <Navbar menu={menu} ctaValue="Open App" ctaUrl="#0" />;

export default Nav;
