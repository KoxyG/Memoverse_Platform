// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MemoToken is ERC20 {

    address public owner;


    constructor() ERC20("MemoToken", "MT") {
        owner = msg.sender;
         _mint(msg.sender, 100000e18);

    }

    function mint(address to, uint256 amount) internal  {
        if(msg.sender != owner) {
            revert("Only owner can mint");
        }
        _mint(to, amount);
    }

}