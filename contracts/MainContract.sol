// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Foodspinner {
    uint256 totalLikes;

    constructor() {
        console.log("Time to get a food idea!");
    }

    function like() public {
        totalLikes += 1;
        console.log("%s had liked!", msg.sender);
    }

    function getTotalLikes() public view returns (uint256) {
        console.log("We have a total of %d likes!", totalLikes);
        return totalLikes;
    }
}
