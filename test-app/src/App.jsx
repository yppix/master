import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Chat from "./pages/Chat";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Counter from "./pages/Counter";


function App() {

    return (<BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path='/pages/home' element={<Home/>}/>
                    <Route path='/pages/chat' element={<Chat/>}/>
                    <Route path='/pages/profile' element={<Profile/>}/>
                    <Route path='/pages/counter' element={<Counter/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
