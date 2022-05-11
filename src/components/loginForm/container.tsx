import React, { FC } from 'react'

import { Loader } from '../loader/component';

import { useSelector } from "react-redux"
import { selectIsUserFailed, selectIsUserLoading } from '../../modules/users/selectors';
import { LoginForm } from './component';
import { IUser, IUserState } from "../../modules/users"
import { RootState } from "../../modules/index"

interface IProps {}

/**
* @author
* @function @LongFormContainer
**/

export const LongFormContainer:FC<IProps> = (props) => {

    const isFailed = useSelector<RootState>(state => selectIsUserFailed(state.users));
    const isLoading = useSelector<RootState>(state => selectIsUserLoading(state.users));
    
    console.log(isFailed)

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
