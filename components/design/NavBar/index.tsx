import Link from "next/link";
import { Bepro } from "@/utils/brands";
import { NavbarProps, MenuProps } from "./types";
import { ButtonLink } from "@taikai/rocket-kit";
import * as Styles from "./styles";

const Navbar = (props: NavbarProps) => {
  const {
    menu,
    ctaValue,
    ctaUrl,
    drawerOpened = false,
    drawerOnClick = () => {},
  } = props;

  return (
    <>
      <Styles.Wrapper>
        <Styles.HamburgerButton
          className={drawerOpened ? "opened" : ""}
          onClick={drawerOnClick}
          aria-label="Menu"
        />
        <Bepro />
        <Styles.Menu>
          <ul>
            {menu.map((item: MenuProps, index: number) => (
              <li key={index}>
                <a href={item.url}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ButtonLink
            color="blue500"
            txtColor="white"
            icon="arrow-external"
            value={ctaValue}
            url={ctaUrl}
            blank
          />
        </Styles.Menu>
      </Styles.Wrapper>
      <Styles.Drawer className={drawerOpened ? "opened" : ""}>
        <ul>
          {menu.map((item: MenuProps, index: number) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
          <li>
            <Link href={ctaUrl} prefetch={false}>
              <a target="_blank" rel="noopener noreferrer">
                {ctaValue}
              </a>
            </Link>
          </li>
        </ul>
      </Styles.Drawer>
    </>
  );
};

export default Navbar;
