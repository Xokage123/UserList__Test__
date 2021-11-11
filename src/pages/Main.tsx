import { FC, useState } from 'react';
// Redux
import { useAppSelector } from '../redux/srote'
// Router
import { useNavigate, useLocation} from 'react-router';

const MainPage: FC = () => {
  const [amountTodo, setAmoutTodo] = useState<number>(10)

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location)

  const { listTodos } = useAppSelector(state => state.todos)

  return (
    <div>
      <button onClick={() => {
        navigate('/')
        console.log(navigate)
      }}>Перейти на вторую страницу</button>
     {
        listTodos.map((todo, index) => {
          return <div key={index}>Привет мир</div>
        })
     }
    </div>
  );
}

export default MainPage;
