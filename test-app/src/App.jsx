import './App.css';
import './Message.js';
import React, {useState, useEffect, useRef} from "react";
import { Box, List, ListItem, ListItemText } from '@mui/material';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    messageDiv : {
      marginBottom:'20px',
      background: 'wheat',
      padding: '30px 0',
      border: '2px solid red',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontSize: '18px',
    },
    inputField : {
        marginBottom: '20px',
    },
    btnEl : {
        background: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)',
        color:'white',
        fontWeight: '600',
        fontSize: '15px',
        padding: '10px 0',
    }
})

function App() {
  const inputElement = useRef(null);
  const [objMsgLists, addMessage] = useState([]);
  const [author, addName] = useState('');
  const [txt, addTxt] = useState('');
  const style = useStyles();

  const sendMessage = () => {
      let random = Math.random();
        addMessage([
          ...objMsgLists,
            {author: author,
          txt: txt,
          id: random,}
      ]);
      inputElement.current.focus();
  }

  // useEffect(() => {
  //     setTimeout(() => {if(objMsgLists.length > 0 ){ alert('Added')}}, 3000);
  // }, [objMsgLists]);

 return (
    <div className="App">
       <Box display="flex" flexDirection="row"
            sx={{
                height: '100vh',
                width: '100%',
                border: '0',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
           <Box display="flex" flexDirection="row" flexGrow={1}>
           <List elevation={0} position="sticky" alignItems="flex-start"
                 sx={{
                     width: '250px',
                     color:'white',
                     background: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)',
                 }}>
              <ListItem>
                  <ListItemText
                      primary="Chat"
                  />
              </ListItem>
              <ListItem>
                  <ListItemText
                      primary="Memes"
                  />
              </ListItem>
           </List>
           </Box>
           <Box display="flex" flexDirection="column" flexGrow={1}
                sx={{
                    padding: '0 50px',
                }}>
               <Box marginTop = "40px" display="flex" flexDirection="column" >
               <label htmlFor="author">Author</label>
               <input value={author}
                      autoFocus={true}
                      onChange={(e) => addName (e.target.value)}
                      ref={inputElement}
                      type="text"
                      name="name"
                      id = "author"
                      className={style.inputField}
               />
               <label htmlFor="message">Your text</label>
               <input value={txt}
                      onChange={(e) => addTxt (e.target.value)}
                      type="text"
                      name="txt"
                      id = "message"
                      className={style.inputField}
               />
               <button onClick={sendMessage} className={style.btnEl}>Send</button>
               </Box>
               <Box
                   sx={{
                       padding: '0 50px',
                       fontFamily: 'Arial sans-serif',
                       fontSize: '14px',
                       '& h3' : {
                           fontSize: '24px',
                           fontWeight: '600',
                       },
                       '& messageDiv' : {
                           marginBottom: '20px',
                       }
                   }}>
                   <h3>Messages</h3>
                   {objMsgLists.map((item)=>{
                       return (
                       <div key={item.id} className={style.messageDiv}>
                           <div>Автор: {item.author}</div>
                           <div>Сообщение: {item.txt}</div>
                       </div>)
                    })
                   }
               </Box>
          </Box>
      </Box>
    </div>
  );
}

export default App;
