export const StakingContractCode = 
`const { StakingContract, Web3Connection } = require("@taikai/dappkit");

/* ERC20 */
const stakeTokenAddress = "0x7a7748bd6f9bac76c2f3fcb29723227e3376cbb2";

/* Create Connection */
const web3Connection = new Web3Connection({
    web3Host: 'https://kovan.infura.io/v3'
});

/* Start Connection */
await web3Connection.start();

/* Login with Metamask/Web3 Wallet */
await web3Connection.connect();

/* Deploy Staking Contract */
const deployer = new StakingContract(web3Connection);

await deployer.loadAbi();

const tx = await deployer.deployJsonAbi(stakeTokenAddress);

/* Create Instance */
const staking = new StakingContract(web3Connection, tx.contractAddress, stakeTokenAddress);

await staking.loadContract();

/* Access methods easily */
const availableTokens = await staking.availableTokens();`;