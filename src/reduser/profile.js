import { CHANGE_NAME, TOGGLE_SHOW_NAME } from "../action/profile";

const initialState = {
    showName: false,
    name: 'John',
    age: 27
}

export default function reduser(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        case TOGGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        default:
            return state
    }
}