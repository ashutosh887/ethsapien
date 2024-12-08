// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title BaseCredentialManager
 * @notice Simplifies user onboarding and credential validation with incentives.
 */
contract BaseCredentialManager {
    struct Credential {
        string name;
        string description;
        uint256 issuedAt; // Timestamp of credential issuance
        address issuer;   // Address of the issuer
        bool isVerified;  // Verification status
    }

    mapping(address => Credential[]) public userCredentials;
    mapping(address => uint256) public userIncentives; // Token-based incentives

    event CredentialIssued(address indexed user, string name, address issuer);
    event IncentiveClaimed(address indexed user, uint256 amount);

    /**
     * @notice Issues a credential to a user.
     * @param _user Address of the user.
     * @param _name Name of the credential.
     * @param _description Description of the credential.
     */
    function issueCredential(address _user, string memory _name, string memory _description) public {
        userCredentials[_user].push(
            Credential(_name, _description, block.timestamp, msg.sender, false)
        );
        userIncentives[_user] += 10; // Reward incentive tokens for onboarding
        emit CredentialIssued(_user, _name, msg.sender);
    }

    /**
     * @notice Marks a credential as verified.
     * @param _user Address of the user.
     * @param _credentialId ID of the credential.
     */
    function verifyCredential(address _user, uint256 _credentialId) public {
        require(_credentialId < userCredentials[_user].length, "Invalid ID");
        Credential storage cred = userCredentials[_user][_credentialId];
        require(cred.issuer == msg.sender, "Only issuer can verify");
        cred.isVerified = true;
    }

    /**
     * @notice Allows users to claim incentives.
     */
    function claimIncentives() public {
        uint256 amount = userIncentives[msg.sender];
        require(amount > 0, "No incentives to claim");

        userIncentives[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit IncentiveClaimed(msg.sender, amount);
    }

    // Function to receive ETH for incentives
    receive() external payable {}
}
