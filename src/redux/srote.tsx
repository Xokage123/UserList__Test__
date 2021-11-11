import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import TodosSlice from './Slices/Todos'

const storeApp = configureStore({
  reducer: {
    todos: TodosSlice
  },
})
export type RootState = ReturnType<typeof storeApp.getState>
export type AppDispatch = typeof storeApp.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default storeApp