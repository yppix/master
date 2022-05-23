import React from 'react';
import {ListItem} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {List, ListItemText} from "@mui/material";

const Home = () => {
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
        </div>
    );
};

export default Home;