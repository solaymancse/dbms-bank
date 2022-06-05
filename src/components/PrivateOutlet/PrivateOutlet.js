import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
export const PrivateOutlet = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);

  return isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
}
