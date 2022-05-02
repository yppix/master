import './App.css';
import './Message.js'
import Message from "./Message";

function App() {
  let txt = 'Здесь должно быть сообщение';
  return (
    <div className="App">
      <Message txt={txt}></Message>
    </div>
  );
}

export default App;
