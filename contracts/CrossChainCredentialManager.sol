// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CrossChainCredentialManager
 * @notice Bridges credentials across multiple blockchain networks: Socket
 */
contract CrossChainCredentialManager {
    struct Credential {
        string data;       // Credential data
        address issuer;    // Issuer of the credential
        bool isBridged;    // Bridging status
    }

    mapping(address => Credential[]) public userCredentials;

    event CredentialAdded(address indexed user, string data, address issuer);
    event CredentialBridged(address indexed user, uint256 credentialId, string targetChain);

    /**
     * @notice Adds a credential to the user's account.
     * @param _data Credential data.
     */
    function addCredential(string memory _data) public {
        userCredentials[msg.sender].push(Credential(_data, msg.sender, false));
        emit CredentialAdded(msg.sender, _data, msg.sender);
    }

    /**
     * @notice Bridges a credential to a target blockchain network.
     * @param _credentialId ID of the credential to bridge.
     * @param _targetChain Name of the target blockchain.
     */
    function bridgeCredential(uint256 _credentialId, string memory _targetChain) public {
        require(_credentialId < userCredentials[msg.sender].length, "Invalid ID");
        Credential storage cred = userCredentials[msg.sender][_credentialId];
        cred.isBridged = true;
        emit CredentialBridged(msg.sender, _credentialId, _targetChain);
    }
}
