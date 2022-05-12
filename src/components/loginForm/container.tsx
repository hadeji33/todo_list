import React, { FC } from 'react'

import { useSelector } from "react-redux"
import { selectIsUserFailed, selectIsUserLoading } from '../../modules/users/selectors'

import { RootState } from "../../modules/index"


import { LoginForm } from './component'
import { Loader } from '../loader/component'


interface IProps {}

/**
* @author
* @function @LoginFormContainer
**/

export const LoginFormContainer:FC<IProps> = (props) => {

    const isFailed = useSelector<RootState>(state => selectIsUserFailed(state.users));
    const isLoading = useSelector<RootState>(state => selectIsUserLoading(state.users));

    if (isLoading) {
        return <Loader/>
    }
    
    if (isFailed) {
        return (
            <>
                <p>Invalid username/password</p>
                <LoginForm />
            </>
        )
    }

    return (
        <LoginForm />
    );
 }
