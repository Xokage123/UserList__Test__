import { FC, useState } from 'react';

import { useParams } from 'react-router';

// Components
import { TableComponent } from './components/Table';
import { PaginationComponent } from './components/Pagination';

import Box from '@mui/material/Box';

const INITIAL_VALUE = 25

const MainPage: FC = () => {
  const [amountTodo, setAmoutTodo] = useState<number>(INITIAL_VALUE)

  const numberPage = Number(useParams().numberPage)

  return (
    <Box>
      <TableComponent numberPage={numberPage} amountTodo={amountTodo} />
      <PaginationComponent numberPage={numberPage} amountTodo={amountTodo} callback={(newValue: number) => {
        setAmoutTodo(() => {
          return newValue
        })
      }} />
    </Box>
  );
}

export default MainPage;
