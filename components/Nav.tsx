import { useState } from "react";
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

const Nav = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Navbar
      menu={menu}
      ctaValue="Open App"
      ctaUrl="#0"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
};

export default Nav;
