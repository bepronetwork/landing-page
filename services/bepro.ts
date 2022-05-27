import { Network, Web3Connection } from '@taikai/dappkit';

class BeproFacet {
  _network;
  constructor(public readonly web3Host = process.env.NEXT_PUBLIC_WEB3_CONNECTION,
              public readonly contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,) {
                
    const web3Connection = new Web3Connection({ web3Host });

    this._network = new Network(web3Connection, contractAddress);
  }

  async getClosedIssues() {
    return this._network.getAmountOfIssuesClosed()
               .catch(e => {
                 console.log(`Error while getClosedIssued`, e)
                 return 0;
               });
  }

  async getOpenIssues() {
    return this._network.getAmountOfIssuesOpened()
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
