// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title CredentialsManager
 * @notice Manages credentials with verification, revocation, and expiration.
 */
contract CredentialsManager {
    struct Credential {
        string name;        // Name of the credential
        string description; // Description of the credential
        uint256 issuedAt;   // Timestamp when the credential was issued
        uint256 expiry;     // Expiry timestamp (optional)
        bool isVerified;    // Verification status
        bool isRevoked;     // Revocation status
    }

    mapping(address => Credential[]) private userCredentials;

    // Events for logging credential activities
    event CredentialAdded(address indexed user, string name, uint256 issuedAt, uint256 expiry);
    event CredentialVerified(address indexed user, uint256 credentialId);
    event CredentialRevoked(address indexed user, uint256 credentialId);

    /**
     * @notice Adds a credential for the caller.
     * @param _name Name of the credential.
     * @param _description Description of the credential.
     * @param _expiry Expiry timestamp (optional, set 0 if no expiry).
     */
    function addCredential(
        string memory _name,
        string memory _description,
        uint256 _expiry
    ) public {
        Credential memory newCredential = Credential({
            name: _name,
            description: _description,
            issuedAt: block.timestamp,
            expiry: _expiry,
            isVerified: false,
            isRevoked: false
        });

        userCredentials[msg.sender].push(newCredential);
        emit CredentialAdded(msg.sender, _name, block.timestamp, _expiry);
    }

    /**
     * @notice Verifies a credential for the user.
     * @param _user Address of the user.
     * @param _credentialId ID of the credential to verify.
     */
    function verifyCredential(address _user, uint256 _credentialId) public {
        require(_credentialId < userCredentials[_user].length, "Invalid credential ID");
        Credential storage cred = userCredentials[_user][_credentialId];
        require(!cred.isVerified, "Credential is already verified");
        cred.isVerified = true;
        emit CredentialVerified(_user, _credentialId);
    }

    /**
     * @notice Revokes a credential for the user.
     * @param _credentialId ID of the credential to revoke.
     */
    function revokeCredential(uint256 _credentialId) public {
        require(_credentialId < userCredentials[msg.sender].length, "Invalid credential ID");
        Credential storage cred = userCredentials[msg.sender][_credentialId];
        require(!cred.isRevoked, "Credential is already revoked");
        cred.isRevoked = true;
        emit CredentialRevoked(msg.sender, _credentialId);
    }

    /**
     * @notice Retrieves all credentials for a user.
     * @param _user Address of the user.
     * @return Array of credentials.
     */
    function getCredentials(address _user) public view returns (Credential[] memory) {
        return userCredentials[_user];
    }
}
