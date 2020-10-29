export function manageFriends(state, action){
}

let state = { friends: [] };

function manageFriends(state, action) {
  const friendIndex = state.friends.findIndex(
    (friend) => friend.id === action.id
  );
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, friendIndex),
          ...state.friends.slice(friendIndex + 1),
        ],
      };
    default:
      return state;
  }
}