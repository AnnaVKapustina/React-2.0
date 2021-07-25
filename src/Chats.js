import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import Button from '@material-ui/core/Button';
import Input from './Input';
import { useHistory } from 'react-router';

function Chats(props) {
  const {
    chats = [],
    currentChat,
    onCurrentChatChange,
    onAddChat,
    onRemoveChat
  } = props
  const history = useHistory()

  const handleChatLinkClick = (chat) => {
    onCurrentChatChange(chat)
    history.push(`/chats/${chat.id}`)
  }


  return (
    <div className="chats">
      <List className="chats_navigation">

        {chats.map((chat) => {

          return (
            <>
              <ListItem
                key={chat.id}
                button
                selected={chat.id === currentChat.id}
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
        onSubmit={onAddChat} />
    </div>
  );
}
export default Chats;