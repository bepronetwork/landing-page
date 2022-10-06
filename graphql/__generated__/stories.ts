/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StoryWhereInput, StoryState } from "./../../types/graphql/generated";

// ====================================================
// GraphQL query operation: stories
// ====================================================

export interface stories_stories_author_photoImageFile {
  __typename: "File";
  id: string;
  url: string;
}

export interface stories_stories_author {
  __typename: "User";
  id: string;
  username: string;
  fullName: string | null;
  photoImageFile: stories_stories_author_photoImageFile | null;
}

export interface stories_stories_featuredImage {
  __typename: "File";
  id: string;
  url: string;
}

export interface stories_stories {
  __typename: "Story";
  id: string;
  slug: string;
  state: StoryState | null;
  draftToken: string;
  canonicalUrl: string | null;
  author: stories_stories_author;
  publishedAt: any | null;
  title: string;
  shortDescription: string;
  featuredImage: stories_stories_featuredImage | null;
  slug_br: string | null;
  shortDescription_br: string | null;
  tags: string[];
  tags_br: string[] | null;
  seoTitle_br: string | null;
  seoDescription_br: string | null;
  title_br: string | null;
  content_br: string | null;
  content: string;
}

export interface stories {
  stories: (stories_stories | null)[] | null;
}

export interface storiesVariables {
  page?: number | null;
  whereInput?: StoryWhereInput | null;
}
