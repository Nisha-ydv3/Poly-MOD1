// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTSetup is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _IDCounter;

    mapping(uint256 => string) private nftPrompts;

    constructor() ERC721("NFTBridge", "NFTB") {}

    function setPrompt(uint256 ID, string memory prompt) external onlyOwner {
        nftPrompts[ID] = prompt;
    }

    function promptDescription(uint256 ID) external view returns (string memory) {
        return nftPrompts[ID];
    }

    function mint(address receiver , string memory cid) external onlyOwner {
        uint256 ID = _IDCounter.current();
        _mint(receiver, ID);
        nftPrompts[ID] = cid;
        _IDCounter.increment();
    }
}