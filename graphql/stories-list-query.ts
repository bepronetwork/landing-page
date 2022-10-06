import { gql } from '@apollo/client';

export const STORIES_QUERY = gql`
  query stories($page: Int, $whereInput: StoryWhereInput) {
    stories(page: $page, orderBy: { publishedAt: desc }, where: $whereInput) {
      id
      slug
      author {
        id
        username
        fullName
        photoImageFile {
          id
          url
        }
      }
      publishedAt
      title
      shortDescription
      featuredImage {
        id
        url
      }
      tags
    }
  }
`;