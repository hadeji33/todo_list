import { selectUser } from "../modules/users/selectors"
import { useSelector } from "react-redux"
import { IUser } from "../modules/users"
import { RootState } from "../modules"

export const useAuth:(() => IUser | null) = () => {
    return useSelector((state:RootState) => selectUser(state.users));
}