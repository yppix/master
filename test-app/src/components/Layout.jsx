import React from 'react';
import {createTheme} from "@mui/material";
import {Link, List, ListItem} from "@material-ui/core";
import {ThemeProvider} from "@emotion/react";
import {pink} from "@mui/material/colors";
import {NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const theme = createTheme({
    palette: {
        primary: {
            main: pink[400],
            light: pink[100]
        }
    }
})

const Layout = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="container">
                    <header>
                        <List className="top-menu">
                            <ListItem>
                                <CustomLink to='/pages/home'>Main</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/chat'>Chat</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/profile'>Profile</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/counter'>Counter</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/fetch'>Doggo</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/register'>Registration</CustomLink>
                            </ListItem>
                            <ListItem>
                                <CustomLink to='/pages/login'>Login</CustomLink>
                            </ListItem>
                        </List>
                    </header>
                    <main>
                        <Outlet/>
                    </main>
                    <footer>

                    </footer>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;