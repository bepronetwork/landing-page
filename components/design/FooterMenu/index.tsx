import Link from "next/link";
import { Bepro } from "@/utils/brands";
import { FooterMenuProps, SubenuProps, LinkProps } from "./types";
import * as Styles from "./styles";

const FooterMenu = (props: FooterMenuProps) => {
  const { links, copyright } = props;

  return (
    <>
      <Styles.Menu>
        {links.map((item: SubenuProps, index: number) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <ul>
              {item.links.map((item: LinkProps, index: number) => (
                <li key={index}>
                  <Link href={item.url}>
                    <a
                      target={item.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Styles.Menu>
      <Styles.Copyright>
        <Link href="/" prefetch={false}>
          <a>
            {" "}
            <Bepro />
          </a>
        </Link>
        <span>{copyright}</span>
      </Styles.Copyright>
    </>
  );
};

export default FooterMenu;
