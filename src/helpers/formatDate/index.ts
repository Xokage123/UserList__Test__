import format from 'date-format'

type IFornater = (date: Date) => string

const formaterDate: IFornater = (date) => {
  return format('dd.MM.yyyy hh:mm:ss', date)
}

export default formaterDate