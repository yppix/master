import './App.css';
import './Message.js'
import React, {useState, useEffect} from "react";

function App() {
  let messageList = [{author:'', text:''}];
  const [objMsgLists, addMessage] = useState([{author:'', text:''}])

  const changeMessage = (e) => {
      const { name, value } = e.target;
      addMessage({
          ...objMsgLists,
          [name]: value,
      });
  }

  const sendMessage = () => {
      let copy = Object.assign([], objMsgLists);
      copy.push({author: objMsgLists.author, txt: objMsgLists.txt})
      addMessage(copy);
      messageList = copy;
  }

    useEffect(() => {
        const timer = setTimeout(() => alert('Added'), 3000);
        return () => clearTimeout(timer);
    }, [objMsgLists]);



    return (
    <div className="App">
       <div>
           {messageList.map((item)=>
               <>
                   <h3>Messages</h3>
                   <p key={Math.random()}>Автор: {objMsgLists.author}</p>
                   <p key={Math.random()}>Сообщение: {objMsgLists.txt}</p>
               </>)
           }
       </div>
      <input value={objMsgLists.author} onChange={changeMessage} type="text" name="author"/>
      <input value={objMsgLists.text} onChange={changeMessage} type="text" name="txt"/>
      <button onClick={sendMessage}>Отправить</button>
    </div>
  );
}

export default App;
