import { ADD_MESSAGE } from "../action/Chat";

const initialState = {};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.payload.chatId]: [
          ...(state[action.payload.chatId] || []),
          action.payload.message
        ],
      }
    }
    default:
      return state;
  }
};

export default chatReducer;