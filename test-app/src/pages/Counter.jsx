import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const value = useSelector(state => state.count);
    const dispatch = useDispatch()
    return (
        <div>
            <p> {value} </p>
            <button onClick={() => dispatch({
                type: 'plus'
            })}> Добавить
            < /button>
        </div>
    );
};

export default Counter;