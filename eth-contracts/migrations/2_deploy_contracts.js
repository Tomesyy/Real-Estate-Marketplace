// migrating the appropriate contracts
var BlackDevRealEstateToken = artifacts.require("BlackDevRealEstateToken")
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(BlackDevRealEstateToken);
  deployer.deploy(Verifier);
  deployer.deploy(SolnSquareVerifier, Verifier.address);
};
