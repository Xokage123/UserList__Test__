export type IStatus = 'new' | 'completed' | 'assigned_to' | 'started' | 'declined'

export type IStatusTransformer = (status: IStatus) => string

export interface ITodoProps {
  id: number;
  oguid: string;
  status: IStatus;
  order_type: {
    name: string;
    oguid: string;
  };
  terminal: {
    name: string;
    oguid: string;
  };
  account: {
    name: string;
    oguid: string;
  };
  created_user: {
    surname: string;
    name: string;
    patronymic: string;
    oguid: string;
  };
  created_date: number
}

export interface IInitialProps {
  listTodos: Array<ITodoProps>
}