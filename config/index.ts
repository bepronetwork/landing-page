import getConfig from 'next/config';
import { StoryBlogSource, StoryState } from '../types/graphql/generated';

const { publicRuntimeConfig } = getConfig();

export const baseUrl = publicRuntimeConfig.baseUrl;
export const blogSource = (publicRuntimeConfig.blogSource as StoryBlogSource) ?? StoryBlogSource.BEPRO;
export const storyState = (publicRuntimeConfig.storyState as StoryState) ?? StoryState.PUBLISHED;
export const apiGraphql = publicRuntimeConfig.backendGraphql ?? 'http://localhost:4444/api/graphql';

export const cdn = {
  cardCoverSet: {
    width: 640,
    height: 0,
    resizingType: 'fit'
  },
  userAvatar: {
    width: 120,
    height: 0,
    resizingType: 'fit',
  },
}