// truffle-config.js
'use strict';

var HDWalletProvider = require("truffle-hdwallet-provider")

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        "fat puzzle vicious turtle follow onion measure car embrace civil shadow smoke",
        "https://ropsten.infura.io/<YourAccessKey>",
        0, // we start with address[0]
        2 // notice that we unlock two: which will be address[0] and address[1]
      ),
      network_id: 3,
      gas: 8000000,
      gasPrice: 20 * 1000000000
    }
  }
}
