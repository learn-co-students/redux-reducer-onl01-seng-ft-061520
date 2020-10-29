// let state = {
//   friends: []
// }
//
// const actions = {
//   addFriend: {
//     type: "ADD_FRIEND",
//     friend: {
//         name: "Chrome Boi"
//         homewtown: "NYC",
//         id: 1
//       }
//   },
//   removeFriend: {
//     type: "REMOVE_FRIEND",
//     id: 1
//   }
// }

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: state.friends.concat(action.friend)}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => friend.id != action.id)}
    default:
      return state;
  }
}
