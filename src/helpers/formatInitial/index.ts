interface IInitialProps {
  name: string;
  surname: string;
  patronymic: string
}

type IFormater = (props: IInitialProps) => string

const formatInitial: IFormater = (initial) => {
  if (initial.surname && initial.name && initial.patronymic) {
    return `${initial.surname} ${initial.name[0].toUpperCase()}.${initial.patronymic[0].toUpperCase()}`
  } return 'Неправильный формат инициалов'
}

export default formatInitial