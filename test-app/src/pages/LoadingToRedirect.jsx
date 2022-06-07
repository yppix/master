import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval (() => {
            setCount((currentCount) => --currentCount)
        }, 1000)
        count === 0 && navigate ('/pages/login')
        return () => clearInterval(interval)
    }, [count,navigate])

    return (
        <div>
            <p>Redirecting in {count} seconds</p>
        </div>
    );
};

export default LoadingToRedirect;