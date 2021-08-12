import firebase from "firebase";
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
    firebase.database().ref('messages').child(chatId).push(message)
    if (message.author !== AUTHORS.CHATBOT) {
      const botMessage = { id: `message${Date.now()}`, author: AUTHORS.CHATBOT, text: "Привет! Как дела?" }
      setTimeout(() => firebase.database().ref('messages').child(chatId).push(botMessage), 1500)
    }
  }
}

export const subscribeOnMessagesChangings = (chatId) => {
  return (dispatch, getState) => {
    firebase.database().ref('messages').child(chatId).on('child_added', (snapshot) => {

      dispatch(addMessage(chatId, snapshot.val()))
    })

    firebase.database().ref('messages').child(chatId).on('child_changed', (snapshot) => {

      dispatch(addMessage(chatId, snapshot.val()))
  })  
  }
}