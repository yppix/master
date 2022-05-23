import React from 'react';
import {Link, useMatch} from 'react-router-dom'

const CustomLink = ({to, children, ...props}) => {
    const match = useMatch(to);
    return (
        <Link style={{
            color: match ? 'greenyellow' : 'black'
        }} to={to} {...props}>
            {children}
        </Link>
    );
};

export default CustomLink;