const initState = {
    users: [{name: 'Chris'}]
}

export default function myReducer(state=initState, action) {
    switch(action.type) {
        case 'ADD_USER':
            const newUserList = [...state.users]
            newUserList.push({name: action.payload})
            return ({
                ...state, users: newUserList
             })
        default:
            return state;
    }
}