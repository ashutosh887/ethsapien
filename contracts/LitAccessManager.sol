// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title LitAccessManager
 * @notice Manages access control for credentials using Lit Protocol.
 */
contract LitAccessManager {
    struct AccessRule {
        address accessor;  // Address granted access
        uint256 expiration; // Expiration timestamp
    }

    mapping(address => AccessRule[]) public userAccessRules;

    event AccessGranted(address indexed user, address accessor, uint256 expiration);

    /**
     * @notice Grants access to a specific address.
     * @param _accessor Address to grant access.
     * @param _expiration Expiration timestamp of the access.
     */
    function grantAccess(address _accessor, uint256 _expiration) public {
        userAccessRules[msg.sender].push(AccessRule(_accessor, _expiration));
        emit AccessGranted(msg.sender, _accessor, _expiration);
    }

    /**
     * @notice Checks if an address has access.
     * @param _user Address of the user.
     * @param _accessor Address to check.
     * @return True if access is granted, false otherwise.
     */
    function hasAccess(address _user, address _accessor) public view returns (bool) {
        AccessRule[] memory rules = userAccessRules[_user];
        for (uint256 i = 0; i < rules.length; i++) {
            if (rules[i].accessor == _accessor && block.timestamp <= rules[i].expiration) {
                return true;
            }
        }
        return false;
    }
}
