import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const NotFound = () => {
    const history =useNavigation()
    return (
        <div>
           <h1> Page Not Found</h1>
        </div>
    );
};

export default NotFound;