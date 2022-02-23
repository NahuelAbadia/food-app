import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({Token}) => {    
    
    return (
        Token ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute