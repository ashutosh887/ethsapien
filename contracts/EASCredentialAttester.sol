// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title EASCredentialAttester
 * @notice Issues attestations for credentials.
 */
contract EASCredentialAttester {
    struct Attestation {
        string data;
        address attester;
        uint256 issuedAt;
    }

    mapping(address => Attestation[]) public userAttestations;

    event AttestationIssued(address indexed user, string data, address attester);

    /**
     * @notice Issues an attestation for a user.
     * @param _user Address of the user.
     * @param _data Data to attest.
     */
    function issueAttestation(address _user, string memory _data) public {
        userAttestations[_user].push(Attestation(_data, msg.sender, block.timestamp));
        emit AttestationIssued(_user, _data, msg.sender);
    }
}
