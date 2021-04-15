const initState = {
    users: [{name: 'Chris'}]
}

const myReducer = (state=initState, action) => {
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

export default myReducer;