import { FC, useState, useCallback, useMemo } from 'react';
// Redux
import { useAppSelector } from '../../redux/srote'
// Router
import { useNavigate, useParams, generatePath } from 'react-router';
import { PATH_LIST } from '../../router';
// Style
import Styles from './style.module.scss';
// Material
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const INITIAL_VALUE = 25

const MainPage: FC = () => {
  const [amountTodo, setAmoutTodo] = useState<number>(INITIAL_VALUE)

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setAmoutTodo(() => {
      return Number(event.target.value)
    });
    navigate(generatePath(PATH_LIST, {
      numberPage: `1`
    })) 
  }, [])

  const numberPage = Number(useParams().numberPage)

  const navigate = useNavigate();

  const { listTodos } = useAppSelector(state => state.todos)

  const maxPage = useMemo<number>(() => {
    const testValue = listTodos.length / amountTodo;
    return testValue
  }, [amountTodo, listTodos.length])

  const filterList = useMemo(() => {
    const startIndex = 0 + ((numberPage - 1) * amountTodo);
    const endIndex = numberPage * amountTodo;
    console.log(startIndex)
    console.log(endIndex)
    return listTodos.slice(startIndex, endIndex)
  }, [amountTodo, listTodos, numberPage])

  const goNextPage = useCallback(() => {
    navigate(generatePath(PATH_LIST, {
      numberPage: `${Number(numberPage) + 1}`
    }))
  }, [navigate, numberPage])

  const goPrevPage = useCallback(() => {
    navigate(generatePath(PATH_LIST, {
      numberPage: `${Number(numberPage) - 1}`
    }))
  }, [navigate, numberPage])

  const goFirstPage = useCallback(() => {
    navigate(generatePath(PATH_LIST, {
      numberPage: `1`
    }))
  }, [navigate])

  const goLastPage = useCallback(() => {
    navigate(generatePath(PATH_LIST, {
      numberPage: `${Number(maxPage)}`
    }))
  }, [maxPage, navigate])

  return (
    <Box>
      <List className={Styles.List}>
        {
          filterList.map((todo, index) => {
            return <ListItem className={Styles.Item} key={index}>
              <Box>Первый столб</Box>
              <Box>Второй столб</Box>
              <Box>Третий столб</Box>
              <Box>Четвертый столб</Box>
            </ListItem>
          })
        }
      </List>

      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <Box>
          <p>записи {(numberPage * amountTodo) - amountTodo + 1}-{numberPage * amountTodo}</p>
        </Box>

        <Box className={Styles.Pagination_Container}>
          <Box className={Styles.Pagination_Box}>
            <IconButton className={Styles.Pagination_Button} disabled={Number(numberPage) === 1} onClick={goFirstPage} aria-label="prev">
              <DoubleArrowIcon className={Styles.Pagination_Icon} sx={{
                transform: 'rotate(180deg)'
              }} />
            </IconButton>
          </Box>
          <Box className={Styles.Pagination_Box}>
            <IconButton className={Styles.Pagination_Button} disabled={Number(numberPage) === 1} onClick={goPrevPage} aria-label="prev">
              <ArrowBackIosIcon className={Styles.Pagination_Icon} />
            </IconButton>
          </Box>
          <Box className={Styles.Pagination_NumberPage}>{numberPage}</Box>
          <Box sx={{
            borderLeft: '1px solid #acacac'
          }} className={Styles.Pagination_Box}>
            <IconButton className={Styles.Pagination_Button} disabled={Number(numberPage) === maxPage} onClick={goNextPage} aria-label="next">
              <ArrowBackIosIcon className={Styles.Pagination_Icon} sx={{
                transform: 'rotate(180deg)'
              }} />
            </IconButton>
          </Box>
          <Box className={Styles.Pagination_Box}>
            <IconButton className={Styles.Pagination_Button} disabled={Number(numberPage) === maxPage} onClick={goLastPage} aria-label="prev">
              <DoubleArrowIcon className={Styles.Pagination_Icon} />
            </IconButton>
          </Box>

        </Box>

        <span>по</span>

        <FormControl sx={{
          width: '80px'
        }}>
          <InputLabel id="label">Записи</InputLabel>
          <Select
            labelId="label"
            value={String(amountTodo)}
            label="amountTodo"
            onChange={handleChange}
          >
            <MenuItem disabled value="">{INITIAL_VALUE}</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MainPage;
