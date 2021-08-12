export const CHANGE_NAME = "PROFILE::CHANGE_NAME"
export const TOGGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME"
export const CHANGE_IS_AUTHED = "PROFILE::CHANGE_IS_AUTHED"

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed
    }
})

export const toggleShowName = {
    type: TOGGLE_SHOW_NAME
}