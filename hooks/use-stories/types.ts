import { StoryWhereInput } from '../../types/graphql/generated';

export interface UseStoriesProps {
  id?: string;
  page?: number | null;
  whereInput?: Omit<StoryWhereInput, 'blogSource'> | null;
}
