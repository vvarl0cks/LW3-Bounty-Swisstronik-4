 
# LearnWeb3DAO <> Swisstronik Challenge #4   

💰 Bounty: https://learnweb3.io/bounties/swisstronik-challenge-4/   
📚 Guide: https://swisstronik.gitbook.io/swisstronik-docs/build-on-swisstronik/contract-deployment-hardhat    

## Tasks:
- Deploy an ERC20 token   
- Mint tokens   
- Transfer at least 1 of your ERC20 tokens to 0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1   

## Hints:
- You can follow our [guide](https://swisstronik.gitbook.io/swisstronik-docs/build-on-swisstronik/contract-deployment-hardhat) to deploy smart contracts with Hardhat   
- Use SwisstronikJS (encryptDataField function) to interact with your deployed smart contract. [Check the Transaction - code sample for guidance.](https://swisstronik.gitbook.io/swisstronik-docs/build-on-swisstronik/contract-deployment-hardhat/5.-interact-with-the-contract-transaction)     

# Deploy   

```shell
gitpod /workspace/LW3-Bounty-Swisstronik-4 (main) $ npx hardhat run scripts/deploy.js --network swisstronik
Downloading compiler 0.8.19
Compiled 5 Solidity files successfully
deployed to 0x455A58369F3e6106fc632C0620b63B0c8e3E5EDF
```   
# Contract   

- Deployed Contract https://explorer-evm.testnet.swisstronik.com/address/0x455A58369F3e6106fc632C0620b63B0c8e3E5EDF   
- Mint Token : https://explorer-evm.testnet.swisstronik.com/tx/0x03dc20a40230c7c960ec1b8c9489ec007090d1cbb19504b53b930aabc8056965   
- Transfer Token: https://explorer-evm.testnet.swisstronik.com/tx/0xf5ea74be08cc99407a8c4c8c61678295bcb76f8d1500602d3baec659f2eaba10   

# Transfer   

```shell
gitpod /workspace/LW3-Bounty-Swisstronik-4 (main) $ npx hardhat run scripts/transfer.js --network swisstronik
Transaction Response:  TransactionResponse {
  provider: HardhatEthersProvider {
    _hardhatProvider: LazyInitializationProviderAdapter {
      _providerFactory: [AsyncFunction (anonymous)],
      _emitter: [EventEmitter],
      _initializingPromise: [Promise],
      provider: [BackwardsCompatibilityProviderAdapter]
    },
    _networkName: 'swisstronik',
    _blockListeners: [],
    _transactionHashListeners: Map(0) {},
    _eventListeners: [],
    _isHardhatNetworkCached: false,
    _transactionHashPollingInterval: undefined,
    _latestBlockNumberPolled: 1245257,
    _blockPollingInterval: undefined
  },
  blockNumber: null,
  blockHash: null,
  index: undefined,
  hash: '0xf5ea74be08cc99407a8c4c8c61678295bcb76f8d1500602d3baec659f2eaba10',
  type: 2,
  to: '0x455A58369F3e6106fc632C0620b63B0c8e3E5EDF',
  from: '0xcbb6d9AaD99b5EE9d5b2E8276B7B0609284d28d0',
  nonce: 6,
  gasLimit: 49339n,
  gasPrice: 8n,
  maxPriorityFeePerGas: 0n,
  maxFeePerGas: 8n,
  data: '0xe491a4af99c8778b225a791f3272f194336869d7100c7eadfa5f8d45d2e7c524a37365f8e5d2b5e276a98843a3be4dda84ac4141a991efb26b91cadee475f57669266ca7f098c3e22e86f892116a460d86f6c960d293de118e133370b4c166205fb97c0af13909afa196650986ddaae1f83073d20bd8e4090d3106aadaef6eb1e2b91bc5c9f8ac28ab97d65d2b956f2c92ec41',
  value: 0n,
  chainId: 1291n,
  signature: Signature { r: "0x3a817533111dd084066d98dd218bd354d8003a316a9127ceb94d9d6628ce057e", s: "0x4bd7b9e9cd112905c16c309d049dd40cd0169c2267049eae6e3396fbe573e57c", yParity: 0, networkV: null },
  accessList: []
}
```   

# Balance   

```shell
gitpod /workspace/LW3-Bounty-Swisstronik-4 (main) $ npx hardhat run scripts/balanceOf.js --network swisstronik
Decoded response: 100n
```   

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```  
