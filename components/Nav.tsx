import { useState } from "react";
import Navbar from "@/ui/NavBar";

const menu = [
  {
    label: "Organizations",
    url: "#org",
    external: false,
  },
  {
    label: "Developers",
    url: "#dev",
    external: false,
  },
  {
    label: "Explore Bounties",
    url: "https://development.bepro.network/bepro",
    external: true,
  },
  {
    label: "Blog",
    url: "https://blog.bepro.network",
    external: true,
  },
];

const Nav = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Navbar
      menu={menu}
      ctaValue="Open App"
      ctaUrl="https://development.bepro.network"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
};

export default Nav;
