// 3_update_call_me_maybe.js
const CallMeMaybe = artifacts.require('CallMeMaybe.sol')

module.exports = function(deployer, networkName, accounts) {
  deployer.then(async () => {
    const instance = await CallMeMaybe.deployed()
    await instance.setName('or not')
  })
};
