import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadTodos} from "../redux/reducers/todoReducer";

const Fetch = () => {
    // const todos = useSelector(state => state.todos.todos );
    // const loading = useSelector(state => state.todos.loading)
     const dispatch = useDispatch;
    //
    // useEffect(() => {
    //     (dispatch(loadTodos()))
    // }, [])

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);



    useEffect(() => {
        const loadTodos = async () => {
            try {
                const response = await fetch('https://api.thedogapi.com/v1/images/search');
                const todos = setTodos(await response.json());
                let loading = false
                setLoading(loading);
                //const todos = setTodos(data)
            }
            catch (e) {
                let error = true;
                setError(error);
                let loading = false
                setLoading(loading);
            }
        }
        loadTodos()
    }, [])

    const handleError = () => {
        const loadTodos = async () => {
            try {
                const response = await fetch('https://api.thedogapi.com/v1/images/search');
                const todos = setTodos(await response.json());
                let loading = false
                setLoading(loading);
                let error = false;
                setError(error);
            }
            catch (e) {
                let error = true;
                setError(error);
                let loading = false
                setLoading(loading);
            }
        }
        loadTodos()
    }


    if (loading) {
        return (
            <div>
                <p>doggo loading...</p>
            </div>
        )
    }

    console.log(error)

    if(error){
        return (
            <button onClick={handleError}>Try again</button>
        )
    }

    return (
        <div>
            {todos.map((todo)=>(
                <div id={todo.id} className="doggo">
                    <p>Doggo</p>
                    <img src={todo.url} alt="doggo"/>
                </div>
                ))}
        </div>
    );
};

export default Fetch;