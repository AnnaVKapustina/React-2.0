import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import Button from '@material-ui/core/Button';
import Input from './Input';
import { useHistory } from 'react-router';
import { addChat, removeChat } from './action/Chats';
import { useDispatch, useSelector } from 'react-redux';
import { chatsSelector } from './selectors/chats_selectors';

function Chats () {

const chats = useSelector(chatsSelector)
const dispatch = useDispatch()

const onAddChat = (name) => {
  dispatch(addChat(`chat${Date.now()}`, name))
}  

const onRemoveChat = (chatId) => {
  dispatch(removeChat(chatId))
}  


const history = useHistory()
const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`)
  }


  return (
    <div className="chats">
      <List className="chats_navigation">

        {Object.values(chats).map((chat) => {

          return (
            <>
              <ListItem
                key={chat.id}
                button
                selected={chat.id}
                onClick={() => handleChatLinkClick(chat)}>
                {chat.name}
              </ListItem>
              <Button variant="contained" color="primary" onClick={() => onRemoveChat(chat.id)}>
                Удалить Чат
              </Button>
            </>)
        })}

      </List>
      <Input
        onSubmit={onAddChat}
        autoFocus
        label = 'Название чата'
        helperText = 'Чтобы добавить чат, введите название и нажмите кнопку "Отправить" ' />
    </div>
  );
}
export default Chats;