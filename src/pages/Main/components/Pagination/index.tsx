import { FC, useCallback, useMemo } from "react";

import { useNavigate, generatePath } from 'react-router';

import { useAppSelector } from '../../../../redux/srote'

import { PATH_LIST } from '../../../../router';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Styles from './style.module.scss';

interface IPaginationProps {
  numberPage: number
  amountTodo: number
  callback: (value: number) => any
}

const INITIAL_VALUE = 25

export const PaginationComponent: FC<IPaginationProps> = (props) => {
  const { numberPage, amountTodo, callback } = props
    
  const { listTodos } = useAppSelector(state => state.todos)

  const navigate = useNavigate()

  const maxPage = useMemo<number>(() => {
    const testValue = listTodos.length / amountTodo;
    return testValue
  }, [amountTodo, listTodos.length])

  const goNextPage = useCallback(() => {
    window.scrollTo(0, 0)
    navigate(generatePath(PATH_LIST, {
      numberPage: `${numberPage + 1}`
    }))
  }, [navigate, numberPage])

  const goPrevPage = useCallback(() => {
    window.scrollTo(0, 0)
    navigate(generatePath(PATH_LIST, {
      numberPage: `${numberPage - 1}`
    }))
  }, [navigate, numberPage])

  const goFirstPage = useCallback(() => {
    window.scrollTo(0, 0)
    navigate(generatePath(PATH_LIST, {
      numberPage: `1`
    }))
  }, [navigate])

  const goLastPage = useCallback(() => {
    window.scrollTo(0, 0)
    navigate(generatePath(PATH_LIST, {
      numberPage: `${Number(maxPage)}`
    }))
  }, [maxPage, navigate])

  const handleChange = useCallback((event: SelectChangeEvent) => {
    callback(Number(event.target.value))
    navigate(generatePath(PATH_LIST, {
      numberPage: `1`
    }))
  }, [callback, navigate])

  return <Box className={Styles.Pagination}>
    <Box>
      <p>Записи {(numberPage * amountTodo) - amountTodo + 1}-{numberPage * amountTodo}</p>
    </Box>

    <Box className={Styles.Pagination_Container}>
      <Box className={Styles.Pagination_Box}>
        <IconButton className={Styles.Pagination_Button} disabled={numberPage === 1} onClick={goFirstPage} aria-label="prev">
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
}