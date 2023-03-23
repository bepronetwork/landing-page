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
import Find from "components/Find";
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
import { getRequest } from "lib/fetch-api";
import { IBeproApi, State } from "lib/types";

const Home: NextPage = ({ bounties }: any) => {
	const { loading, error, data } = useStories({ page: 0 });

	return (
		<>
			<SiteHead />
			<Nav />
			<Intro />
			<What />
			<How />
			<Workflows />
			<CreateBounty />
			<CreateNetwork />
			<Participate />
			<Find bounties={bounties ?? []} />
			<ForWhom />
			<Audited />
			<LaunchNetwork />
			<Partners />
			<Community />
			<Stories data={data} loading={loading} error={error} />
			<Newsletter />
			<Footer />
		</>
	);
};

export async function getServerSideProps() {
	const apolloClient = initializeApollo();

	const { data } = await getRequest<IBeproApi>(`/search/issues`);

	await apolloClient.query({
		query: STORIES_QUERY,
	});

	return {
		props: {
			bounties: data?.rows ?? [],
			[APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract(),
		},
	};
}

export default Home;
