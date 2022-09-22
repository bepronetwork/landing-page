import getConfig from "next/config";
import Section from "@/ui/Section";
import StoriesGrid from "@/ui/StoriesGrid";
import StoryCard from "@/ui/StoryCard";
import LoadingStories from "@/ui/LoadingStories";
import {
  getCdnUrlBlogPostCover,
  getCdnUrlUserSmallAvatar,
} from "@/utils/media";

interface StoriesProps {
  loading: any;
  error: any;
  data: any;
}

const { publicRuntimeConfig } = getConfig();

const Stories = (props: StoriesProps) => {
  const { loading, error, data } = props;
  const moment = require("moment");
  const defaultCover = "default-cover.svg";

  if (loading)
    return (
      <Section title="Latest blog posts" subheading="Blog" headerMargin="s">
        <LoadingStories />
      </Section>
    );
  if (error || !data) return <></>;

  return (
    <Section title="Latest blog posts" subheading="Blog" headerMargin="s">
      <StoriesGrid>
        {data?.stories.slice(0, 4).map((item: any, index: number) => {
          const url = `${publicRuntimeConfig.blogUrl}/${item.slug}`;
          const storyCoverUrl = item?.featuredImage?.url ?? defaultCover;
          const storyCoverUrlCdn = getCdnUrlBlogPostCover(storyCoverUrl);
          const author = item?.author?.fullName ?? item?.author?.username;
          const authorAvatarUrl = getCdnUrlUserSmallAvatar(
            item?.author?.photoImageFile?.url
          );

          return (
            <StoryCard
              key={index}
              url={url}
              coverUrl={storyCoverUrlCdn}
              tags={item.tags}
              title={item.title}
              description={item?.shortDescription}
              authorAvatarUrl={authorAvatarUrl}
              author={author}
              date={moment(item.publishedAt).format("MMM DD, YYYY")}
            />
          );
        })}
      </StoriesGrid>
    </Section>
  );
};

export default Stories;
