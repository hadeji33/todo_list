import { IRoutes } from "../api/routes"

export const mainRoutes: IRoutes = {
    main: () => "/",
    about: () => "about",
    login: () => "login",
    tasks: () => "tasks",
    
    notfound: () => "404"
}