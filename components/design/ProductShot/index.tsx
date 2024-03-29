import * as Styles from "./styles";
import { ProductShotProps } from "./types";

const ProductShot = (props: ProductShotProps) => {
  const { subheading, title, children, imgSrc, imgAlt, invert = false } = props;

  return (
    <Styles.Wrapper invert={invert}>
      <Styles.Content>
        {subheading && <span>{subheading}</span>}
        <h2>{title}</h2>
        {children}
      </Styles.Content>
      <Styles.Image>
        <picture>
          <img src={imgSrc} alt={imgAlt} />
        </picture>
      </Styles.Image>
    </Styles.Wrapper>
  );
};

export default ProductShot;
