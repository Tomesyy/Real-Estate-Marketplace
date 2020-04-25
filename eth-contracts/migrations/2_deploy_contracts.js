// migrating the appropriate contracts
var BlackDevRealEstateToken = artifacts.require("BlackDevRealEstateToken")
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function(deployer) {
  deployer.deploy(BlackDevRealEstateToken);
  deployer.deploy(Verifier).then(function() {
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  })
};
