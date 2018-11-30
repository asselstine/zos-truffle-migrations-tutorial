
// CallMeMaybe.sol

pragma solidity ^0.4.24;

import "openzeppelin-eth/contracts/ownership/Ownable.sol";

contract CallMeMaybe is Ownable {
  string public name;

  function init(address _owner, string _name) public initializer {
    Ownable.initialize(_owner);
    name = _name;
  }

  function setName(string _newName) public onlyOwner {
    name = _newName;
  }
}
