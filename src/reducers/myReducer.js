const initState = {
    name: 'Chris'
}

const myReducer = (state=initState, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return ({
                name: action.payload
             })
        default:
            return state;
    }
}

export default myReducer;