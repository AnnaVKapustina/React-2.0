import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { addMessageBot } from './action/Chat';
import Input from './Input';
import Message from './Message';
import { chatSelector } from './selectors/chat_selectors';
import { chatsSelector } from './selectors/chats_selectors';
import { useCallback } from 'react';

const Chat = () => {

  const { chatId } = useParams()

  const AUTHORS = {
    ANNA: 'Anna',
    CHATBOT: 'ChatBot'
  }
  const messageList = (useSelector(chatSelector)[chatId] || [])

  const dispatch = useDispatch()

  const chats = useSelector(chatsSelector)
  const useIsChatExists = ({ chatId }) => {
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
  }
  const onAddMessage = useCallback((message) => {
    dispatch(addMessageBot(chatId, { id: `message${Date.now()}`, author: AUTHORS.ANNA, text: message }));
  }, [chatId, dispatch]);

  const isChatExists = useIsChatExists({ chatId })

  if (!isChatExists) {

    return <Redirect to="/chats" />
  }

  return (
    <div className="chat_item">
      {messageList.length ? (
        <div className="messages">
          {messageList.map((message) => (
            <Message
              author={message.author}
              text={message.text}
              id={message.id}
            />
          ))}
        </div>
      ) : null}
      <Input 
      onSubmit={onAddMessage} />
    </div>
  )
}
export default Chat