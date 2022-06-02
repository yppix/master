import React, { useState} from 'react';
import {Box, ListItem, ListItemText} from "@mui/material";
import {Button, List, TextField} from "@material-ui/core";
import CustomLink from "../components/CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "../redux/action";

const Chat = () => {
    const dispatch = useDispatch();

    const chats = useSelector(state => state.chats.chats)
    const [name, setName] = useState('');

    const deleteHandler = (id) =>{
        dispatch(deleteChat(id))
    }

    const handleChange = (e) =>{
        setName(e);
    }

    const addHandler = () => {
        let random = Math.random();
        console.log(name)
        let obj = {
            id: random,
            name: name
        }
        dispatch(addChat(obj))
    }

    return (
        <div className="chats">
            <div className="chats-nav">
                <List>
                    {chats.map((item) => {
                        return (<ListItem key={item.id} className="chat-link">
                            <CustomLink  to={`/pages/speak/${item.id}`}>{item.name}</CustomLink>
                            <Button  style={{maxWidth: '150px', maxHeight: '150px', minWidth: '50px', minHeight: '50px', fontSize: '12px', marginLeft: '10px'}}
                                     variant="outlined" onClick={() => deleteHandler(item.id)}>
                                Delete chat
                            </Button>
                            </ListItem>)
                    })
                    }
                    <div className="add-chat">
                    <TextField id="name" label="Chat name" variant="outlined"
                               onChange={(e) => handleChange(e.target.value)}
                               margin="normal"/>
                    <Button  style={{maxWidth: '150px', maxHeight: '100px', minWidth: '50px', minHeight: '55px', fontSize: '12px', marginLeft: '10px'}}
                             variant="outlined" value={name} onClick={() => addHandler()}>
                        Add chat
                    </Button>
                    </div>
                </List>
            </div>
        </div>
    );
}

export default Chat;