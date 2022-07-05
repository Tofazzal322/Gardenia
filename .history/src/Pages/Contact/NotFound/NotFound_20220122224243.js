import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const history = useNavigate()

    useEffect(() => {
        setTimeout(() => {
           history('/home') 
        },3000)
    },[history])
    return (
        <div className='App text-center'>
           <h1> Page Not Found</h1>
        </div>
    );
};

export default NotFound;