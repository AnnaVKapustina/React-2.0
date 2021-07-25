import { useState, useRef, useMemo, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import Input from './Input';
import Message from './Message';

const Chat = (props) => {

  const { getIsChatExists } = props

  const { chatId } = useParams()

  const AUTHORS = {
    ANNA: 'Anna',
    CHATBOT: 'ChatBot'
  }
  const [messageList, setMessageList] = useState([]);

  const timer = useRef(null)

  useEffect(() => {

    if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.CHATBOT) {
      timer.current = setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList, { author: AUTHORS.CHATBOT, text: 'Привет! Как дела?' }
        ])
      }, 1500)
    }
  }, [messageList])

  useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleMessageSubmit = (newMessageText) => {
    setMessageList((currentMessageList) => [
      ...currentMessageList, { author: AUTHORS.ANNA, text: newMessageText }
    ])
  }
  const isChatExists = useMemo(

    () => getIsChatExists(chatId),

    [getIsChatExists, chatId])

  if (!isChatExists) {

    return <Redirect to="/chats" />
  }

  return (
    <div className="chat_item">
      {messageList.length ? (
        <div className="messages">
          {messageList.map((message, index) => (
            <Message
              key={index}
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