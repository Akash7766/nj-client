import React from 'react'
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



function PrivateRoute({ element, path }) {
    const { user } = useAuth()
    const ele = user.email ? element : <Navigate to="/Home" />;
    return <Route path={path} element={ele} />;
}


export default PrivateRoute


