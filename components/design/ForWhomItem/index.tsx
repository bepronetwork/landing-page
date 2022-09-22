import { ButtonLink } from "@taikai/rocket-kit";
import * as Styles from "./styles";
import { ForWhomItemProps } from "./types";

const ForWhomItem = (props: ForWhomItemProps) => {
  const { className, icon, subheading, title, children, url, buttonLabel } =
    props;

  return (
    <Styles.Wrapper className={className}>
      <div>
        {icon}
        <span>{subheading}</span>
        <h2>{title}</h2>
        {children}
      </div>
      <ButtonLink
        color={className === "for-developers" ? "white" : "blue500"}
        txtColor={className === "for-developers" ? "blue500" : "white"}
        url={url}
        value={buttonLabel}
        rounded
      />
    </Styles.Wrapper>
  );
};

export default ForWhomItem;
