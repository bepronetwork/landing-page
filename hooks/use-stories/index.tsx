import { useQuery } from "@apollo/client";
import { blogSource, storyState } from "../../config";
import { STORIES_QUERY } from "../../graphql/stories-list-query";
import { stories, storiesVariables } from "../../graphql/__generated__/stories";
import { RequireOnlyOne } from "../../types/utility-types";
import { UseStoriesProps } from "./types";

export const useStories = (props?: RequireOnlyOne<UseStoriesProps>) => {
  const page = props?.page;

  const { loading, data, error } = useQuery<stories, storiesVariables>(
    STORIES_QUERY,
    {
      variables: {
        page,
        whereInput: {
          blogSource: {
            equals: blogSource,
          },
          state: {
            equals: storyState,
          },
        },
      },
    }
  );

  return { loading, data, error };
};
