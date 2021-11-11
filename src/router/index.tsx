import { FC } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";

// Pages
import MainPage from '../pages/Main';

interface IRoutesArray {
  path: string;
  exact: boolean
  Element: FC
}

export const RoutesArray: Array<IRoutesArray> = [
  {
    path: '',
    exact: true,
    Element: MainPage
  }
]


const RouterApp: FC = () => {
  return <Routes>
    {
      RoutesArray.map(route => {
        const { path, Element } = route
        return (
          <Route path={path} element={<Element />} key={path}></Route>
        )
      })
    }
  </Routes>
}

export default RouterApp
