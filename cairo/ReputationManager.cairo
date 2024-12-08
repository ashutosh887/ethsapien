%lang starknet

# This contract tracks and updates user reputation scores.
# Reputation scores are used to assess trustworthiness and expertise.

@storage_var
# Mapping from user address (felt) to their reputation score (felt).
func reputation_score(user: felt) -> (felt):
end

@external
# Update the reputation score for a user.
# - user: Address of the user.
# - delta: Change in reputation score (can be positive or negative).
func update_reputation{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt, delta: felt
):
    let current_score = reputation_score.read(user=user) # Get the current reputation score.
    let new_score = current_score + delta                # Update the score.
    reputation_score.write(user=user, value=new_score)   # Save the new score.
    return ()
end

@view
# Retrieve the reputation score of a user.
# - user: Address of the user.
# Returns the reputation score of the user.
func get_reputation{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    user: felt
) -> (score: felt):
    let score = reputation_score.read(user=user)
    return (score=score)
end
