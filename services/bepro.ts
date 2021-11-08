import {Network} from 'bepro-js';

class BeproFacet {
  _network;
  constructor(public readonly web3Connection = process.env.NEXT_PUBLIC_WEB3_CONNECTION,
              public readonly contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,) {
    const opt = {opt: {web3Connection}};
    this._network = new Network({contractAddress, ...opt});
  }

  async getClosedIssues() {
    return this._network.getAmountofIssuesClosed()
               .catch(e => {
                 console.log(`Error while getClosedIssued`, e)
                 return 0;
               });
  }

  async getOpenIssues() {
    return this._network.getAmountofIssuesOpened()
               .catch(e => {
                 console.log(`Error while getOpenIssues`, e)
                 return 0;
               });
  }

  async getBEPROStaked() {
    return this._network.getBEPROStaked()
               .catch(e => {
                 console.log(`Error while getBEPROStaked`, e)
                 return 0;
               });
  }

  async getTokensStaked() {
    return this._network.getTokensStaked()
               .catch(e => {
                 console.log(`Error while getBEPROStaked`, e)
                 return 0;
               });
  }
}

export const BeproService = new BeproFacet();
