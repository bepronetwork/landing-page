import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import * as Styles from "./styles";
import { FeaturedBountiesProps } from "./types";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const FeaturedBounties = (props: FeaturedBountiesProps) => {
	const { bounties } = props;

	return (
		<Styles.Bounties>
			{bounties.map((bounty) => (
				<Styles.Bounty key={bounty.id} status={bounty.state} color="purple500">
					<Link
						href={`${publicRuntimeConfig.webnetUrl}/bepro/bounty?id=${bounty.githubId}&repoId=${bounty.repository_id}`}
						prefetch={false}
					>
						<a target="blank" rel="noopener noreferrer">
							<div>
								<div className="network">
									<div className="logo">
										<Image
											layout="fixed"
											width="14"
											height="14"
											src="/bepro-symbol.svg"
											alt="bounty-network-name"
										/>
									</div>
									<span className="network">Bepro Network</span>
								</div>
								{bounty.state && (
									<div className="status">
										<span>{bounty.state}</span>
									</div>
								)}
							</div>
							<div>
								<div className="description">
									<span>{bounty.title}</span>
								</div>
								{bounty.amount && (
									<div className="prize">
										<span className="value">
											{numeral(bounty.amount).format("0a")}
										</span>
										<span className="currency">BEPRO</span>
									</div>
								)}
							</div>
						</a>
					</Link>
				</Styles.Bounty>
			))}
		</Styles.Bounties>
	);
};

export default FeaturedBounties;
