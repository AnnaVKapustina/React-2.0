import { CHANGE_IS_AUTHED, CHANGE_NAME, TOGGLE_SHOW_NAME } from "../action/profile";

const initialState = {
    showName: false,
    name: 'John',
    age: 27,
    isAuthed: false
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
        case CHANGE_IS_AUTHED: {
            return {
                ...state,
                isAuthed: action.payload.isAuthed
            }
        }
        default:
            return state
    }
}