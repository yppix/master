import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {Button, TextField} from "@material-ui/core";

const Speak = () => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const inputElement = useRef(null);

    const chats = useSelector(state => state.chats.speaks);

    const speaks = chats.filter((speak) => {
        console.log(speak);
        if(!id) return true;
        return speak.chatId === Number(id);
    })


    console.log(speaks);
    console.log(id)

    const [author, addName] = useState('');
    const [txt, addTxt] = useState('');

    const handleChangeAuthor = (e) =>{
        addName(e);
    }

    const handleChangeTxt = (e) =>{
        addTxt(e);
    }

    const sendMessage = (event) => {
        event.preventDefault();

        let random = Math.random();
        let obj =
            {
                id: random,
                chatId: Number(id),
                author: author,
                txt: txt,
            };
        //console.log(obj)
        dispatch({type:'addMsg', payload: obj})

        inputElement.current.focus();
    }

    return (
        <div className="chats-view">
            <h3 className="message-title">Messages</h3>
            {speaks.map((item) => {
                return (
                    <div key={item.id} className="item-message">
                        <div>Автор: {item.author}</div>
                        <div>Сообщение: {item.txt}</div>
                    </div>)
            })
            }
            <Box component="form" noValidate className="form-mess"
                 autoComplete="off" onSubmit={sendMessage}>
                <TextField id="author" label="Name" variant="outlined"
                           onChange={(e) => handleChangeAuthor(e.target.value)}
                           ref={inputElement} margin="normal"/>

                <TextField id="txt" multiline label="Message" variant="outlined" margin="normal"
                           onChange={(e) => handleChangeTxt(e.target.value)}
                           ref={inputElement}/>
                <Button type="submit" variant="outlined" color="primary" sx={{mt: 10}}>Отправить</Button>
            </Box>
        </div>
    );
};

export default Speak;