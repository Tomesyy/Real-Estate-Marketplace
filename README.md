# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Real Estate Marketplace

> In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. 
> 
> Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase. Let's get started!

## Token

Name: BlackDevRealEstateToken<br>
Symbol: BDRET<br>
Token Address:https://rinkeby.etherscan.io/token/0x3618D00992D3D32f2d876E42fEA74aF63A432280


## OpenSea

Original Owner: [0xb43eadc52571fd08291fa783aea561187d2c544d](https://rinkeby.opensea.io/accounts/0xb43eadc52571fd08291fa783aea561187d2c544d)<br>
Buyer of 5 Listings: [0x61c49cce1ac913552a67da45f61a4a8249d34a0a](https://rinkeby.opensea.io/accounts/0x61c49cce1ac913552a67da45f61a4a8249d34a0a)<br>

Buy Transaction: [0x0add1e2510300b2332cbd820181f18110c5092b73ee80cf104e3d63def82c0f1](https://rinkeby.etherscan.io/tx/0x0add1e2510300b2332cbd820181f18110c5092b73ee80cf104e3d63def82c0f1)


## Contracts

SolnSquareVerifier Contract - https://rinkeby.etherscan.io/address/0x3618D00992D3D32f2d876E42fEA74aF63A432280 <br>
Verifier Contract - https://rinkeby.etherscan.io/address/0x4a92418ffAFFf2A484e6df1B33317a701ADa65B6 <br>
BlackDevRealEstateToken Contract - https://rinkeby.etherscan.io/address/0xAb9F76F5CBB182bCC8c81a975390983397b408d0


```bash

Deploying 'BlackDevRealEstateToken'
-----------------------------------
> transaction hash:    0xfd49f5cafd3fd8c49c0e256cc20ddfd904be397faa768c4c14e5a94f46195d68
> Blocks: 2            Seconds: 17
> contract address:    0xAb9F76F5CBB182bCC8c81a975390983397b408d0
> block number:        6378244
> block timestamp:     1587829087
> account:             0x533a5903F2b95509F39C93072302A8312f44392D
> balance:             15.237267732000000001
> gas used:            3080835
> gas price:           20 gwei
> value sent:          0 ETH
> total cost:          0.0616167 ETH


Deploying 'Verifier'
--------------------
> transaction hash:    0xffc2660c42c072160dbe9eb02bd52e9cba1dfdb4c659eb8660d54004fecf4c12
> Blocks: 1            Seconds: 21
> contract address:    0x4a92418ffAFFf2A484e6df1B33317a701ADa65B6
> block number:        6378246
> block timestamp:     1587829117
> account:             0x533a5903F2b95509F39C93072302A8312f44392D
> balance:             15.217413832000000001
> gas used:            992695
> gas price:           20 gwei
> value sent:          0 ETH
> total cost:          0.0198539 ETH


Deploying 'SolnSquareVerifier'
------------------------------
> transaction hash:    0x711ff998a454d6bfe19113f1c1946adffa730d4a2940de51eb151ef82d6e7e5d
> Blocks: 0            Seconds: 5
> contract address:    0x3618D00992D3D32f2d876E42fEA74aF63A432280
> block number:        6378247
> block timestamp:     1587829132
> account:             0x533a5903F2b95509F39C93072302A8312f44392D
> balance:             15.144569652000000001
> gas used:            3642209
> gas price:           20 gwei
> value sent:          0 ETH
> total cost:          0.07284418 ETH


> Saving migration to chain.
> Saving artifacts
-------------------------------------
> Total cost:          0.15431478 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.15881952 ETH
   

```



## Testing

1. `cd eth-contracts` directory
1. Run `truffle compile && truffle migrate --reset`
1. run `truffle test`

Contract artifacts including ABI can be found in `eth-contracts/build/contracts`

## Versions

### Truffle

```bash
Truffle v5.0.31 (core: 5.0.31)
Solidity - 0.5.1 (solc-js)
Node v10.16.0
Web3.js v1.2.1
```

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
