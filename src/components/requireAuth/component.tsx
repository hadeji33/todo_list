import React, { FC } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

interface IProps {}

/**
* @author
* @function @RequireAuth
**/

export const RequireAuth:FC<IProps> = (props) => {
    const user = useAuth()
    const location = useLocation()

    return (
        user
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} replace />
    ) 
 }
