// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Warlocks is ERC20 {
    constructor()ERC20("WRLK","$WRLK"){} 

    function mint() public {
        _mint(msg.sender,21000*10**18);
    }
    
}