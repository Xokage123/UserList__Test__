import { FC, useEffect } from "react";
// Redux
import { useAppDispatch } from './redux/srote'
import { fetchGetTodos } from "./redux/Slices/Todos";

import RouterApp from './router'

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGetTodos())
  }, [dispatch])

  return (
    <div>
      <RouterApp />
    </div>
  )
}

export default App