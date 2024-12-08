// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Interface for interacting with BEP-20 tokens (similar to ERC-20 on Ethereum)
interface IBEP20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract BNBRewardManager {
    // The address of the admin who deploys and manages the contract
    address public admin;

    // The BEP-20 token used for reward distribution
    IBEP20 public rewardToken;

    // Struct to store reward information for each user
    struct RewardInfo {
        uint256 amount;      // Reward amount in tokens
        bool isEligible;     // Eligibility flag for claiming rewards
    }

    // Mapping from user addresses to their reward information
    mapping(address => RewardInfo) public rewards;

    // Events to track actions for transparency and off-chain indexing
    event RewardSet(address indexed user, uint256 amount);           // Triggered when a reward is set
    event RewardClaimed(address indexed user, uint256 amount);       // Triggered when a reward is claimed
    event EligibilityUpdated(address indexed user, bool isEligible); // Triggered when user eligibility is updat
