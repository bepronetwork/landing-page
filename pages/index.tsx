import type { NextPage } from "next";
import Nav from "components/Nav";
import Intro from "components/Intro";
// import Stories from "../components/Stories";
import {
  initializeApollo,
  APOLLO_STATE_PROP_NAME,
} from "../config/apolloClient";
import { useStories } from "../hooks/use-stories";
import { STORIES_QUERY } from "../graphql/stories-list-query";

const Home: NextPage = () => {
  const { loading, error, data } = useStories({ page: 0 });

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Nav />
      <Intro />
      {/* <Stories data={data} loading={loading} error={error} /> */}
    </>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: STORIES_QUERY,
  });

  return {
    props: {
      [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract(),
    },
  };
}

export default Home;
