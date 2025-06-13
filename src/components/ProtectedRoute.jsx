import React from 'react'
import { Navigate } from 'react-router-dom';
import { useShopContext } from '../context/ShopContext'

const ProtectedRoute = ({children}) => {
  const { user } = useShopContext();
  if(!user){
    return <Navigate to='/login' replace />
  }

  return children;
};

export default ProtectedRoute
