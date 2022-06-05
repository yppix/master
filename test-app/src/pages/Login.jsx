import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Button, TextField} from "@material-ui/core";
import {loginInitiate} from "../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import { userSelector} from "../redux/reducers/selectors";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return
        }
        dispatch(loginInitiate(email, password))
    }

    return (
        <div>
            <header style={{width: '100%', height: 70, background: 'green'}}>
                <NavLink to={'/login'} style={{textDecoration: 'none', fontSize: 25, color: 'white'}}> Enter </NavLink>
            </header>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
                <TextField id="email" label="Email" variant="outlined"
                           onChange={(e) => setEmail(e.target.value)}
                           margin="normal"/>
                <TextField id="password" label="Password" variant="outlined"
                           onChange={(e) => setPassword(e.target.value)}
                           margin="normal"/>
                <Button type="submit" variant="outlined" color="primary" sx={{mt: 10}}>Sign in</Button>
            </form>
        </div>
    );
};

export default Login;