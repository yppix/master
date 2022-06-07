import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/selectors";
import {Button, TextField} from "@material-ui/core";
import {registerInitiate} from "../redux/actions/actions";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
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
        if (password !== passwordConfirm) {
            return
        }
        dispatch(registerInitiate(email, password, displayName))
    }

    return (
        <div>
            <header style={{width: '100%', height: 70, background: 'green'}}>
                <NavLink to={'/login'} style={{textDecoration: 'none', fontSize: 25, color: 'white'}}> Enter </NavLink>
            </header>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
                <TextField id="displayName" label="Login" variant="outlined"
                           onChange={(e) => setDisplayName(e.target.value)}
                           margin="normal"/>
                <TextField id="email" label="Email" variant="outlined"
                           onChange={(e) => setEmail(e.target.value)}
                           margin="normal"/>
                <TextField id="password" label="Password" variant="outlined"
                           onChange={(e) => setPassword(e.target.value)}
                           margin="normal"/>
                <TextField id="passwordConfirm" label="Repeat your password" variant="outlined"
                           onChange={(e) => setPasswordConfirm(e.target.value)}
                           margin="normal"/>
                <Button type="submit" variant="outlined" color="primary" sx={{mt: 10}}>Sign up</Button>
            </form>
        </div>
    );
};

export default Register;
