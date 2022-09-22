interface StoriesProps {
  loading: any;
  error: any;
  data: any;
}

const Stories = (props: StoriesProps) => {
  const { loading, error, data } = props;
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error!</div>;

  return (
    <ul>
      {data?.stories.map((story: any, index: number) => (
        <li key={index}>{story?.title}</li>
      ))}
    </ul>
  );
};

export default Stories;
