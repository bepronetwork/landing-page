import React from "react";
import MainNav from "./main-nav";
import MainNavTaikai from "./main-nav-taikai";

export default function Header() {
  return (
    <>
      <MainNavTaikai />
      <MainNav />
    </>
  );
}
