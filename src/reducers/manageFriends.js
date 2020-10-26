export function manageFriends(state, action){

    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
            break;
        case 'REMOVE_FRIEND':
            let dex = state.friends.indexOf(action.id);
            let result = state.friends.filter(friend => friend.id !== action.id)
            return {friends: result}
            break;
        default:
            return state;
    }
}
