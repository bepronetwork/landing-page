import { IBeproApi, State } from "lib/types";

export type BountiesProps = {
	url: string;
	status: `${State}`;
	currencyColor: string;
	network: string;
	description: string;
	prize: number;
	currency: string;
};

export interface BountyStatusProps {
	status: `${State}`;
}

export interface FeaturedBountiesProps {
	bounties: IBeproApi["rows"];
}
