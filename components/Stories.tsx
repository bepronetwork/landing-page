interface StoriesProps {
  loading: any;
  error: any;
  data;
}

const Stories = (props: StoriesProps) => {
  const { loading, error, data } = props;
  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error!</div>;

  return (
    <ul>
      {data?.stories.map((story, index) => (
        <li key={index}>{story?.title}</li>
      ))}
    </ul>
  );
};

export default Stories;
