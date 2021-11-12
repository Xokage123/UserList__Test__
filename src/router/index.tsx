import { FC, useEffect } from "react";
import { useRoutes, useNavigate, generatePath } from "react-router-dom";

// Pages
import MainPage from '../pages/Main';
import TodoPage from '../pages/Todo'

export const PATH_LIST = '/page/:numberPage';

export const PATH_TODO = '/todo/:id';


const RouterApp: FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <StartPage/>
    },
    {
      path: PATH_LIST,
      element: <MainPage />
    },{
      path: PATH_TODO,
      element: <TodoPage />
    }
  ])
  return element
}

const StartPage: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(generatePath(PATH_LIST, {
      numberPage: '1'
    }))
  })

  return <div>Подождите, информация загружается...</div>
}

export default RouterApp
