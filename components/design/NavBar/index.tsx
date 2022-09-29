import Link from "next/link";
import { Bepro } from "@/utils/brands";
import { NavbarProps, MenuProps } from "./types";
import { ButtonLink } from "@taikai/rocket-kit";
import { useAnalytics } from "@/utils/analytics";
import BuyBepro from "components/BuyBepro";
import * as Styles from "./styles";

const Navbar = (props: NavbarProps) => {
  const {
    menu,
    ctaValue,
    ctaUrl,
    drawerOpened = false,
    drawerOnClick = () => {},
  } = props;

  const analytics = useAnalytics();

  return (
    <>
      <Styles.Wrapper>
        <Link href="/" prefetch={false}>
          <a>
            <Bepro />
          </a>
        </Link>
        <Styles.HamburgerButton
          className={drawerOpened ? "opened" : ""}
          onClick={drawerOnClick}
          aria-label="Menu"
        />
        <Styles.Menu>
          <ul>
            {menu.map((item: MenuProps, index: number) => (
              <li key={index}>
                <Link href={item.url} prefetch={false}>
                  <a
                    target={item.external ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink
            color="blue500"
            txtColor="white"
            icon="arrow-external"
            iconPosition="right"
            value={ctaValue}
            url={ctaUrl}
            action={() => {
              analytics.pushEvent({
                category: "engagement",
                action: "open-app-button",
                label: "open-app-button",
              });
            }}
            blank
            rounded
          />
          <BuyBepro />
        </Styles.Menu>
      </Styles.Wrapper>
      <Styles.Drawer className={drawerOpened ? "opened" : ""}>
        <ul>
          {menu.map((item: MenuProps, index: number) => (
            <li key={index}>
              <a
                href={item.external ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
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
