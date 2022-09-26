import { useState } from "react";
import Navbar from "@/ui/NavBar";

const menu = [
  {
    label: "Organizations",
    url: "#0",
    external: true,
  },
  {
    label: "Developers",
    url: "#0",
    external: true,
  },
  {
    label: "Explore Bounties",
    url: "#0",
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
