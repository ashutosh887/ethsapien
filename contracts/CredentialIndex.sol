// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CredentialIndex
 * @notice Indexes credentials for efficient querying using The Graph.
 */
contract CredentialIndex {
    struct Credential {
        string name;
        string description;
        address user;
    }

    Credential[] public credentials;

    event CredentialAdded(string name, string description, address user);

    /**
     * @notice Adds a credential to the index.
     * @param _name Name of the credential.
     * @param _description Description of the credential.
     */
    function addCredential(string memory _name, string memory _description) public {
        credentials.push(Credential(_name, _description, msg.sender));
        emit CredentialAdded(_name, _description, msg.sender);
    }

    /**
     * @notice Retrieves all credentials.
     * @return List of credentials.
     */
    function getAllCredentials() public view returns (Credential[] memory) {
        return credentials;
    }
}
