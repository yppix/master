import React from 'react';
import {Button, ListItem} from "@material-ui/core";
import {NavLink, useNavigate} from "react-router-dom";
import {List, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/selectors";
import {logoutInitiate} from "../redux/actions/actions";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }

        setTimeout(() => {
            navigate('/')
        }, 3000)
    }
    console.log(user)

    return (
        <div>
            <List className="top-menu">
                <ListItem>
                    <NavLink to='/pages/profile'>Profile</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/pages/chat'>Chat</NavLink>
                </ListItem>
            </List>

            <Button onClick={handleAuth} variant="outlined" color="primary" sx={{mt: 10}}>Exit</Button>

        </div>
    );
};

export default Home;