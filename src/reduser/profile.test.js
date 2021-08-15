import reduser, { initialState } from "./profile";
import { CHANGE_NAME, TOGGLE_SHOW_NAME, CHANGE_IS_AUTHED } from "../action/profile"

describe('reduser', () => {
  it('CHANGE_NAME', () => {
    const action = {
      type: CHANGE_NAME,
      payload: {name: 'Anna'},
    }

    expect(reduser(initialState, action)).toEqual({
      ...initialState,
      name: action.payload.name
    })
  })
  it('TOGGLE_SHOW_NAME', () => {
    const action = {
      type: TOGGLE_SHOW_NAME,
    }

    expect(reduser(initialState, action)).toEqual({
      ...initialState,
      showName: !initialState.showName,
    })
  })
  it('CHANGE_IS_AUTHED', () => {
    const action = {
      type: CHANGE_IS_AUTHED,
      payload: {isAuthed: true}
    }

    expect(reduser(initialState, action)).toEqual({
      ...initialState,
      isAuthed: action.payload.isAuthed
    })
  })
})