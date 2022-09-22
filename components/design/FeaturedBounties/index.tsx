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
          <a href={bounty.url}>
            <div>
              <div className="network">
                <img src="/bepro-symbol.svg" alt="" />
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
        </Styles.Bounty>
      ))}
    </Styles.Bounties>
  );
};

export default FeaturedBounties;
