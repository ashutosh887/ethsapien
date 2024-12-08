// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialsManager {
    struct Credential {
        string name;
        string description;
        uint256 issuedAt;
    }

    mapping(address => Credential[]) private userCredentials;

    event CredentialAdded(address indexed user, string name, string description, uint256 issuedAt);

    function addCredential(string memory _name, string memory _description) public {
        Credential memory newCredential = Credential({
            name: _name,
            description: _description,
            issuedAt: block.timestamp
        });
        userCredentials[msg.sender].push(newCredential);
        emit CredentialAdded(msg.sender, _name, _description, block.timestamp);
    }

    function getCredentials(address _user) public view returns (Credential[] memory) {
        return userCredentials[_user];
    }
}
