const  initialState = {
    text: "",
}

const rootReducer = (state= initialState, action) => {
    switch(action.type) {
        case 'ADD_TEXT': return {...state, text: action.payload};
        case 'RESET': return {...state, text: ""};
        default: return state
    }
}

export default rootReducer;