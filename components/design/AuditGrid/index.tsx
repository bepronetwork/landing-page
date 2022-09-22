import Link from "next/link";
import * as Styles from "./styles";
import { AuditGridProps, ItemsProps } from "./types";

const AuditGrid = (props: AuditGridProps) => {
  const { items } = props;

  return (
    <Styles.Wrapper>
      {items.map((item: ItemsProps, index: number) => (
        <Link href="#0" key={index}>
          <a target="_blank" rel="noopener noreferrer">
            {item.logo}
            <span>{item.desc}</span>
          </a>
        </Link>
      ))}
    </Styles.Wrapper>
  );
};

export default AuditGrid;
