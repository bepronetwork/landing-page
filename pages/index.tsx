import getConfig from "next/config";
import { useEffect } from "react";
import type { NextPage } from "next";
import SiteHead from "components/SiteHead";
import Nav from "components/Nav";
import Intro from "components/Intro";
import What from "components/What";
import How from "components/How";
import Workflows from "components/Workflows";
import CreateBounty from "components/CreateBounty";
import CreateNetwork from "components/CreateNetwork";
import Participate from "components/Participate";
// import Find from "components/Find";
import ForWhom from "components/ForWhom";
import Audited from "components/Audited";
import LaunchNetwork from "components/LaunchNetwork";
import Partners from "components/Partners";
import Community from "components/Community";
import Stories from "components/Stories";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import {
  initializeApollo,
  APOLLO_STATE_PROP_NAME,
} from "../config/apolloClient";
import { useStories } from "../hooks/use-stories";
import { STORIES_QUERY } from "../graphql/stories-list-query";
import { useAnalytics, AnalyticsContext } from "@/utils/analytics";

const Home: NextPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { loading, error, data } = useStories({ page: 0 });
  const disableAnalytics = publicRuntimeConfig.gaDisabled || "true";
  const debugAnalytics = publicRuntimeConfig.gaDebug || "false";
  const analytics = useAnalytics();

  if (disableAnalytics === "false") {
    analytics.init({
      disabled: false,
      debug: debugAnalytics === "true",
    });
    analytics.disable(false);
  } else {
    analytics.disable(true);
  }

  useEffect(() => {
    analytics.pageview(window.location.pathname + window.location.search);
  }, [analytics]);

  return (
    <AnalyticsContext.Provider value={analytics}>
      <SiteHead />
      <Nav />
      <Intro />
      <What />
      <How />
      <Workflows />
      <CreateBounty />
      <CreateNetwork />
      <Participate />
      {/* <Find /> */}
      <ForWhom />
      <Audited />
      <LaunchNetwork />
      <Partners />
      <Community />
      <Stories data={data} loading={loading} error={error} />
      <Newsletter />
      <Footer />
    </AnalyticsContext.Provider>
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
