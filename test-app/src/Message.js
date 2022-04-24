import React from 'react';

const Message = (props) => {
    let className = 'txtClass';
    return (
        <div>
            <h1 className={className}>{props.txt}</h1>
        </div>
    );
};

export default Message;