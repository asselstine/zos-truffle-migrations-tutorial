// 2_create_call_me_maybe.js
const shell = require('shelljs')

module.exports = function(deployer, networkName, accounts) {
  deployer.then(() => {
    if (shell.exec(`zos create CallMeMaybe --init init --args ${accounts[0]},maybe --network ${networkName} --from ${accounts[1]}`).code !== 0) {
      throw new Error('Migration failed')
    }
  })
};
