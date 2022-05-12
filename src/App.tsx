import React from 'react'

import { Navigate, useRoutes } from 'react-router-dom'

import { mainRoutes as R } from "./modules/browseroutes/routes";

import { LoginFormContainer } from './components/loginForm/container'
import { MainLayout } from "./components/main/component"
import { RequireAuth } from './components/requireAuth/component'
import { PageNotFound } from "./pages/notFoundPage/PageNotFound"



function App() {

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '*', element: <Navigate to={R.notfound()} />},
      {path: R.main(), element: <div>Hello</div>},
      {path: R.notfound(), element: <PageNotFound />},
      {path: R.tasks(), element: <Navigate to={R.tasks()} />},
      {path: R.login(), element: <LoginFormContainer/>},
      {path: R.about(), element: <div>About page</div>}
    ],
  };

  const taskRoutes = {
    path: 'tasks',
    element: <MainLayout />,
    children: [
      { 
        element: <RequireAuth />,
        children: [
          { path: '*', element: <Navigate to={R.notfound()} />},
        ]
      },
    ],
  };

  const routing = useRoutes([mainRoutes, taskRoutes]);

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
