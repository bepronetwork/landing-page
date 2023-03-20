import Section from "@/ui/Section";
import FeaturedBounties from "@/ui/FeaturedBounties";
import { ButtonLink } from "@taikai/rocket-kit";
import { BountiesCarrousel } from "@/utils/ldjson";
import { useAnalytics } from "@/utils/analytics";
import { getRequest } from "lib/fetch-api";
import { IBeproApi } from "lib/types";

interface FindProps {
	bounties: IBeproApi["rows"];
}

const Find = ({ bounties }: FindProps) => {
	const title = "Find a bounty to work on";
	const analytics = useAnalytics();

	return (
		<>
			<BountiesCarrousel title={title} bounties={bounties} />
			<Section title={title} subheading="Featured bounties">
				<FeaturedBounties bounties={bounties} />
				<ButtonLink
					variant="outline"
					color="blue500"
					txtColor="white"
					url="https://app.bepro.network"
					value="See all bounties"
					action={() => {
						analytics.pushEvent("see_all_bounties_button");
					}}
					rounded
					blank
				/>
			</Section>
		</>
	);
};

export default Find;
