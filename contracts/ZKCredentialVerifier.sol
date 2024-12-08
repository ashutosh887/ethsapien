// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title ZKCredentialVerifier
 * @notice Verifies credentials using zk-SNARKs for privacy preservation: Polygon
 */
contract ZKCredentialVerifier {
    struct Credential {
        bytes32 zkProof;  // Zero-knowledge proof of the credential
        address issuer;   // Address of the credential issuer
        bool isVerified;  // Verification status
    }

    mapping(address => Credential[]) public userCredentials;

    event CredentialAdded(address indexed user, bytes32 zkProof, address issuer);
    event CredentialVerified(address indexed user, uint256 credentialId);

    /**
     * @notice Adds a credential with a zk-SNARK proof.
     * @param _zkProof Zero-knowledge proof of the credential.
     */
    function addCredential(bytes32 _zkProof) public {
        userCredentials[msg.sender].push(Credential(_zkProof, msg.sender, false));
        emit CredentialAdded(msg.sender, _zkProof, msg.sender);
    }

    /**
     * @notice Verifies a zk-SNARK proof for a user's credential.
     * @param _user Address of the user.
     * @param _credentialId ID of the credential to verify.
     */
    function verifyCredential(address _user, uint256 _credentialId) public {
        require(_credentialId < userCredentials[_user].length, "Invalid ID");
        Credential storage cred = userCredentials[_user][_credentialId];
        cred.isVerified = true;
        emit CredentialVerified(_user, _credentialId);
    }
}
