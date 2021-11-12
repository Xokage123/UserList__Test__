import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { IInitialProps, ITodoProps} from '../../ITE/interface/todo'

import { getListTodo } from '../../api/todos'


export const initialState: IInitialProps = {
  listTodos: []
}

export const fetchGetTodos = createAsyncThunk(
  'todos/fetchGetTodos',
  async (_, thunkAPI) => {
    try {
      const list: Array<ITodoProps> = await getListTodo()
      return list
    } catch (er) {
      thunkAPI.rejectWithValue(er)
    }
  }
)

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetTodos.fulfilled, (state, action) => {
      if (action.payload) {
        state.listTodos = action.payload
      }
    })
  }
})

export default TodosSlice.reducer