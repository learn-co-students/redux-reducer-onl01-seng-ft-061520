export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({
                friends: [

                    ...state.friends, 
                    {
                        name: "Joe",
                        hometown: "Boston",
                        id: 101
                    }
                ]
            })    
        case 'REMOVE_FRIEND':
            // create new variable with value of object that needs to be deleted 
            let deleteIt = state.friends.find(element => element.id === action.id)
            return ({
                //Use filter() method  to output a copy of state without the object that we want deleted
                friends: state.friends.filter(element => {
                    return element.id != deleteIt.id
                })
            })
        default:
            return state;
    }
}
