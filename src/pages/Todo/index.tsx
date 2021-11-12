import { FC } from "react";

import { useNavigate, useParams } from 'react-router';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TodoPage: FC = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  return (
    <Box sx={{
      padding: '15px'
    }}>
      <Button onClick={() => {
        navigate(-1)
      }} variant="contained" color="error">Назад</Button>
      <Typography variant="body1">Страница задания с id: {id}</Typography>
    </Box>
  )
}

export default TodoPage