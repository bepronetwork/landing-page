import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const LdCarrousel = (props: { title: string; items: any }) => {
  const { title, items } = props;
  const content = {
    "@context": "https://schema.org",
    name: title,
    "@type": "ItemList",
    itemListElement: items,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
    />
  );
};

export const StoryCarrousel = (props: { stories: any; title: string }) => {
  const { stories, title } = props;
  const blogItems = stories.map((story: any, index: number) => {
    const url = `${publicRuntimeConfig.blogUrl}/${story.slug}`;
    return {
      "@type": "ListItem",
      position: index,
      url: url,
    };
  });
  return <LdCarrousel title={title} items={blogItems} />;
};

export const BountiesCarrousel = (props: { bounties: any; title: string }) => {
  const { bounties, title } = props;
  const carrouselItems = bounties.map((bounty: any, index: number) => {
    const url = bounty.url;
    return {
      "@type": "ListItem",
      position: index,
      url: url,
    };
  });
  return <LdCarrousel title={title} items={carrouselItems} />;
};
