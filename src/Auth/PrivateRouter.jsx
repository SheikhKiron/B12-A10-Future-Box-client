import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../Components/Spinner';

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext)
  const location=useLocation()
  if (loading) {
    return <Spinner></Spinner>
  }
  if (!user) {
    return (
      <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
  }
  return children
};

export default PrivateRouter;