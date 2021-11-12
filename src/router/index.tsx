import { FC, useEffect } from "react";
import { Routes, Route, useRoutes, useNavigate, generatePath } from "react-router-dom";

// Pages
import MainPage from '../pages/Main';

export const PATH_LIST = '/page/:numberPage';


const RouterApp: FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <StartPage/>
    },
    {
      path: PATH_LIST,
      element: <MainPage />
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
