import { IUser, userSlice } from ".."

import { selectUser } from "../selectors"
import axios from "../../api/axios"
import { AppDispatch, RootState } from "../..";
import { Buffer } from "buffer"
import { userRoutes } from "../../api/routes"

export function authentificate(userName: string, password: string) {
    return function (dispatch: AppDispatch, getState: RootState) {
        const state: RootState = getState();
        const currentUser = selectUser(state.users);

        if (currentUser && currentUser?.username !== null) {
            return;
        }

        dispatch(userSlice.actions.startLoading());


        const encodedToken = Buffer.from(`${userName}:${password}`).toString('base64')
        const result = () => {
            axios.post<IUser>(
                userRoutes.login(),
                {},
                {
                    headers: {
                        'Authorization': 'Basic ' + encodedToken
                    },
                })
                .then(response => {
                    dispatch(userSlice.actions.authentificate({ user: response.data, token: encodedToken }))
                }).catch((error) => {
                    dispatch(userSlice.actions.failLoading({ error }))
                })
        }
        setTimeout(
            result,
            1000
        )
    }
}
