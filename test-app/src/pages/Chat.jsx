import React, {useRef, useState} from 'react';
import {Box, ListItem, ListItemText} from "@mui/material";
import {Button, List, TextField} from "@material-ui/core";
import CustomLink from "../components/CustomLink";

const Chat = () => {
    const inputElement = useRef(null);
    const [chats, addChat] = useState([
        {id: 1, name: 'First chat'},
        {id: 2, name: 'Second chat'},
        {id: 3, name: 'Third chat'},
    ]);

    const [objMsgLists, addMessage] = useState([]);
    const [author, addName] = useState('');
    const [txt, addTxt] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();

        let random = Math.random();
        addMessage([
            ...objMsgLists,
            {
                author: author,
                txt: txt,
                id: random,
            }
        ]);
        inputElement.current.focus();
    }
    return (
        <div className="chats">
            <div className="chats-nav">
                <List>
                    {chats.map((item) => {
                        return (<ListItem key={item.id} className="chat-link">
                            <CustomLink  to={`/pages/chat/${item.id}`}>{item.name}</CustomLink>
                            </ListItem>)
                    })
                    }
                </List>
            </div>
            <div className="chats-view">
                <h3 className="message-title">Messages</h3>
                {objMsgLists.map((item) => {
                    return (
                        <div key={item.id} className="item-message">
                            <div>Автор: {item.author}</div>
                            <div>Сообщение: {item.txt}</div>
                        </div>)
                })
                }
                <Box component="form" noValidate className="form-mess"
                     autoComplete="off" onSubmit={sendMessage}>
                    <TextField id="author" label="Имя" variant="outlined"
                               onChange={(e) => addName(e.target.value)}
                               ref={inputElement} margin="normal"/>

                    <TextField id="txt" multiline label="Сообщение" variant="outlined" margin="normal"
                               onChange={(e) => addTxt(e.target.value)}
                               ref={inputElement}/>
                    <Button type="submit" variant="outlined" color="primary" sx={{mt: 10}}>Отправить</Button>
                </Box>
            </div>
        </div>
    );
}

export default Chat;