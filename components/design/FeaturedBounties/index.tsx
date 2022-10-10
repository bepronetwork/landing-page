import Link from "next/link";
import Image from "next/image";
import numeral from "numeral";
import * as Styles from "./styles";
import { BountiesProps, FeaturedBountiesProps } from "./types";

const FeaturedBounties = (props: FeaturedBountiesProps) => {
  const { bounties } = props;

  return (
    <Styles.Bounties>
      {bounties.map((bounty: BountiesProps, index: number) => (
        <Styles.Bounty
          key={index}
          status={bounty.status}
          color={bounty.currencyColor}
        >
          <Link href={bounty.url} prefetch={false}>
            <a target="blank" rel="noopener noreferrer">
              <div>
                <div className="network">
                  <div className="logo">
                    <Image
                      layout="fixed"
                      width="14"
                      height="14"
                      src="/bepro-symbol.svg"
                      alt={bounty.network}
                    />
                  </div>
                  <span className="network">{bounty.network}</span>
                </div>
                {bounty.status && (
                  <div className="status">
                    <span>{bounty.status}</span>
                  </div>
                )}
              </div>
              <div>
                <div className="description">
                  <span>{bounty.description}</span>
                </div>
                {bounty.prize && bounty.currency && (
                  <div className="prize">
                    <span className="value">
                      {numeral(bounty.prize).format("0a")}
                    </span>
                    <span className="currency">{bounty.currency}</span>
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
