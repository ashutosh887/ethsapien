%lang starknet

# This contract manages user credentials on StarkNet.
# Users can add credentials, revoke them, and query their existing credentials.

@contract_interface
namespace ICredentialManager:
    func add_credential(user: felt, credential_id: felt, metadata: felt) -> ():
    end

    func revoke_credential(user: felt, credential_id: felt) -> ():
    end

    func get_credentials(user: felt) -> (credentials: felt*):
    end
end

@storage_var
# Mapping from user address (felt) to their credential metadata (felt).
func credentials(user: felt) -> (felt):
end

@external
# Add a credential for a user.
# - user: Address of the user.
# - credential_id: Unique identifier for the credential.
# - metadata: Metadata describing the credential.
func add_credential{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt, credential_id: felt, metadata: felt
):
    let existing_credential = credentials.read(user=user)
    assert(existing_credential == 0, "Credential already exists") # Ensure credential does not already exist.

    credentials.write(user=user, value=metadata) # Store credential metadata.
    return ()
end

@external
# Revoke an existing credential for a user.
# - user: Address of the user.
# - credential_id: Identifier of the credential to revoke.
func revoke_credential{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt, credential_id: felt
):
    let existing_credential = credentials.read(user=user)
    assert(existing_credential != 0, "Credential does not exist") # Ensure credential exists.

    credentials.write(user=user, value=0) # Revoke the credential by resetting its metadata.
    return ()
end

@view
# Retrieve all credentials for a user.
# - user: Address of the user.
# Returns the metadata of all credentials for the user.
func get_credentials{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt
) -> (credentials: felt*):
    let creds = credentials.read(user=user)
    return (credentials=creds)
end
