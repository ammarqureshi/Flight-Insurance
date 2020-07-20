// var HDWalletProvider = require("truffle-hdwallet-provider");
var HDWalletProvider = require("@truffle/hdwallet-provider");
// var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
var mnemonic = "hawk sword picture shield chicken accuse brain cheese flat crystal wall leader";
module.exports = {
  networks: {
    development: {
      provider: new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50),
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: "^0.5.0"
    }
  }
};