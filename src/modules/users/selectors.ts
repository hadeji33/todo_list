import {IUserState} from "."

export const selectUser = (state: IUserState) => state.currentUser;

export const selectIsUserLoading = (state: IUserState) => state.isLoading;
export const selectIsUserFailed = (state: IUserState) => state.isFailed;
export const selectIsLogin = (state: IUserState) => state.isLogin;