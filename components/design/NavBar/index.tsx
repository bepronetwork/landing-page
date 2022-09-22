import { Bepro } from "@/utils/brands";
import * as Styles from "./styles";
import { NavbarProps, MenuProps } from "./types";
import { ButtonLink } from "@taikai/rocket-kit";

const Navbar = (props: NavbarProps) => {
  const { menu, ctaValue, ctaUrl } = props;

  return (
    <Styles.Wrapper>
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
  );
};

export default Navbar;
