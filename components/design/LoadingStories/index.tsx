import { LoadingState } from "@taikai/rocket-kit";
import * as Styles from "./styles";

const LoadingStories = () => {
  return (
    <Styles.Wrapper>
      <LoadingState type="card" cardsNumber={4} lines={15} />
    </Styles.Wrapper>
  );
};

export default LoadingStories;
