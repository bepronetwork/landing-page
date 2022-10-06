type Status = 'open' | 'funding' | 'proposal';

export type BountiesProps = {
  url: string,
  status: Status,
  currencyColor: string,
  network: string,
  description: string,
  prize: number,
  currency: string,
}

export interface BountyStatusProps {
  status: Status;
}

export interface FeaturedBountiesProps {
  bounties: any;
}