export interface IBeproApi {
	count: number;
	rows: ReadonlyArray<IBounty>;
	currentPage: number;
	pages: number;
}

export interface IBounty {
	id: number;
	issueId: string;
	githubId: string;
	state: State;
	creatorAddress: string;
	creatorGithub: string;
	amount: string;
	fundingAmount: string;
	fundedAmount: null | string;
	repository_id: number;
	title: string;
	body: string;
	branch: string;
	working: string[];
	merged: null | string;
	seoImage: string;
	network_id: number;
	contractId: number;
	tokenId: number;
	fundedAt: Date | null;
	tags: string[] | null;
	createdAt: Date;
	updatedAt: Date;
	developers: any[];
	pullRequests: PullRequest[];
	mergeProposals: MergeProposal[];
	repository: Repository;
	token: Token;
}

export interface MergeProposal {
	id: number;
	issueId: number;
	pullRequestId: number;
	githubLogin: string;
	contractId: number;
	creator: string;
	network_id: number;
	contractCreationDate: null | string;
	disputeWeight: null | string;
	refusedByBountyOwner: boolean;
	isDisputed: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface PullRequest {
	id: number;
	githubId: string;
	issueId: number;
	githubLogin: null | string;
	userRepo: null | string;
	userBranch: null | string;
	userAddress: null | string;
	status: string;
	contractId: number | null;
	reviewers: string[];
	network_id: number | null;
	createdAt: Date;
	updatedAt: Date;
}

export interface Repository {
	id: number;
	githubPath: string;
}

export enum State {
	Closed = "closed",
	Open = "open",
	Funding = "funding",
	Proposal = "proposal",
}

export interface Token {
	id: number;
	name: string;
	symbol: Symbol;
	address: string;
	isTransactional: boolean;
	isReward: boolean;
	isAllowed: boolean;
}
