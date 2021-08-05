export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message }
});

const AUTHORS = {
  ANNA: 'Anna',
  CHATBOT: 'ChatBot'
}
export const addMessageBot = (chatId, message) => {
  return (dispatch, getState) => {
    dispatch(addMessage(chatId, message))
    if (message.author !== AUTHORS.CHATBOT) {
      const botMessage = { id: `message${Date.now()}`, author: AUTHORS.CHATBOT, text: "Привет! Как дела?" }
      setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500)
    }
  }
}