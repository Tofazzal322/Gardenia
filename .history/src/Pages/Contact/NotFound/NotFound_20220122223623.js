import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const history = useNavigate()

    useEffect(() => {
        setTimeout(() => {
           history 
        },3000)
    },[])
    return (
        <div>
           <h1> Page Not Found</h1>
        </div>
    );
};

export default NotFound;