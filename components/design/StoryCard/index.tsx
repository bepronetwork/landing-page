import Link from "next/link";
import TextTruncate from "react-text-truncate";
import { Tag, AvatarImage } from "@taikai/rocket-kit";
import { StoryCardProps } from "./types";
import * as Styles from "./styles";

const CardStory = (props: StoryCardProps) => {
  const {
    url,
    coverUrl,
    tags,
    title,
    description,
    authorAvatarUrl,
    author,
    date,
  } = props;

  return (
    <Styles.Wrapper>
      <Link href={url}>
        <a target="_blank" rel="noopener noreferrer">
          <Styles.CoverWrapper>
            <Styles.Cover src={coverUrl} alt={title} />
          </Styles.CoverWrapper>
          <Styles.Container>
            <Styles.Content>
              <ul>
                {tags.map((tag: string, index: number) => (
                  <li key={index}>
                    <Tag color="blue850" txtColor="blue500" value={tag} />
                  </li>
                ))}
              </ul>
              <h3>{title}</h3>
              <TextTruncate line={4} truncateText="…" text={description} />
            </Styles.Content>
            <Styles.Footer>
              <Styles.Author>
                <AvatarImage url={authorAvatarUrl} alt={author} />
                <div>
                  <span className="author">{author}</span>
                  <span className="date">{date}</span>
                </div>
              </Styles.Author>
            </Styles.Footer>
          </Styles.Container>
        </a>
      </Link>
    </Styles.Wrapper>
  );
};

export default CardStory;
