import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h3 className='text-5xl font-bold'>Loading...</h3>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} ></Navigate>
};

export default PrivateRoute;