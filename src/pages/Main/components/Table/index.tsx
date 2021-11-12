import { FC, useMemo, useCallback } from 'react'

import { useNavigate, generatePath } from 'react-router';

import { useAppSelector } from '../../../../redux/srote'

import formatInitial from '../../../../helpers/formatInitial'
import formaterDate from '../../../../helpers/formatDate'
import transformerStatus from '../../../../helpers/statusName'

import { PATH_TODO } from '../../../../router';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Styles from './style.module.scss';

interface ITableProps {
  numberPage: number
  amountTodo: number
}

export const TableComponent: FC<ITableProps> = (props) => {
  const { numberPage, amountTodo } = props

  const navigate = useNavigate();

  const { listTodos } = useAppSelector(state => state.todos)

  const filterList = useMemo(() => {
    const startIndex = 0 + ((numberPage - 1) * amountTodo);
    const endIndex = numberPage * amountTodo;
    return listTodos.slice(startIndex, endIndex)
  }, [amountTodo, listTodos, numberPage])

  const goPageTodo = useCallback((id: number) => {
    navigate(generatePath(PATH_TODO, {
      id: String(id)
    }))
  }, [navigate])

  return (
    <Box className={Styles.Table}>
      <table className={Styles.Table_Container}>
        <thead className={Styles.Table_Header}>
          <tr className={Styles.Table_RowHeader}>
            <th className={Styles.Table_HeaderData}>Номер&nbsp;/ Дата</th>
            <th className={Styles.Table_HeaderData}>Тип задания&nbsp;/ Автор</th>
            <th className={Styles.Table_HeaderData}>Аккаунт&nbsp;/ Терминал</th>
            <th style={{
              textAlign: 'center'
            }} className={Styles.Table_HeaderData}>Статус</th>
          </tr>
        </thead>
        <tbody>
          {
            filterList.map((todo, index) => {
              return (
                <tr onClick={() => {
                  goPageTodo(todo.id)
                }} key={index} className={Styles.Table_Row}>
                  <td className={Styles.Table_Data}>
                    <Box className={Styles.Table_DataContainer}>
                      <Typography variant="body1" className={[Styles.Table_DataId, Styles.Table_Text, Styles.Table_TextSpecial].join(" ")}>№{todo.id}</Typography>
                      <Typography variant="body1" className={[Styles.Table_DataTime, Styles.Table_Text].join(" ")}>{formaterDate(new Date(todo.created_date))}</Typography>
                    </Box>
                  </td>
                  <td className={Styles.Table_Data}>
                    <Box className={Styles.Table_DataContainer}>
                      <Typography variant="body1" className={[Styles.Table_Order, Styles.Table_Text].join(" ")}>{todo.order_type.name}</Typography>
                      <Typography variant="body1" className={[Styles.Table_User, Styles.Table_Text].join(" ")}>{formatInitial(todo.created_user)}</Typography>
                    </Box>
                  </td>
                  <td className={Styles.Table_Data}>
                    <Box className={Styles.Table_DataContainer}>
                      <Typography variant="body1" className={[Styles.Table_Account, Styles.Table_Text].join(" ")}>{todo.account.name}</Typography>
                      <Typography variant="body1" className={[Styles.Table_Terminal, Styles.Table_Text].join(" ")}>{todo.terminal.name}</Typography>
                    </Box>
                  </td>
                  <td className={Styles.Table_Data}>
                    <Box className={Styles.Table_DataContainer}>
                      <Typography variant="body1">
                        <div className={[Styles[`Table_Status-${todo.status}`], Styles.Table_Status].join(" ")}>{transformerStatus(todo.status)}</div>
                      </Typography>
                    </Box>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Box>
  )
}