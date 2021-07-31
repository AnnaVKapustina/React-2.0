import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { addMessage } from './action/Chat';
import Input from './Input';
import Message from './Message';
import { chatSelector } from './selectors/chat_selectors';
import { chatsSelector } from './selectors/chats_selectors';

const Chat = () => {

  const { chatId } = useParams()

  const AUTHORS = {
    ANNA: 'Anna',
    CHATBOT: 'ChatBot'
  }
  const messageList = (useSelector(chatSelector)[chatId] || [])
  
  const dispatch = useDispatch()

  const chats = useSelector (chatsSelector)
  const useIsChatExists = ({chatId}) => {
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
  }

//  useEffect(() => {

//    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.CHATBOT) {
//      timer.current = setTimeout(() => {
//        setMessageList((currentMessageList) => [
//          ...currentMessageList, { author: AUTHORS.CHATBOT, text: 'Привет! Как дела?' }
//        ])
//      }, 1500)
//    }
//  }, [messageList])

  const handleMessageSubmit = (message) => {
    dispatch (addMessage(chatId, {id: `message${Date.now()}`, author: AUTHORS.ANNA, text: message}))
  }
  const isChatExists = useIsChatExists ({chatId})

  if (!isChatExists) {

    return <Redirect to="/chats" />
  }

  return (
    <div className="chat_item">
      {messageList.length ? (
        <div className="messages">
          {messageList.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              author={message.author}
            />
          ))}
        </div>
      ) : null}
      <Input onSubmit={handleMessageSubmit} />
    </div>
  )
}
export default Chat