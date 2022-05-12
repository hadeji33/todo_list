export interface IRoutes {
    [key: string]: (param?:string) => string
}

const enum R {
    user = '/users',
    tasks = '/tasks',
}

export const userRoutes: IRoutes = { 
    login: () => `${R.user}/authentificate`,
    signUp: () => `${R.user}`,
    delete: (id) => `${R.user}/${id}`,
}

export const tasksRoutes: IRoutes = {
    create: () => `${R.tasks}`,
    showList: () => `${R.tasks}`,
    showAllList: () => `${R.tasks}/all`,
    getOneById: (id) => `${R.tasks}s/${id}`,
    editOneById: (id) => `${R.tasks}s/${id}`, 
    deleteOneById: (id) => `${R.tasks}/${id}`,
    toggleOneById: (id) => `${R.tasks}/${id}/toggle`,
}