import type { IStatusTransformer } from '../ITE/interface/todo'

const transformerStatus: IStatusTransformer = (status) => {
  switch (status) {
    case 'new':
      return 'Новое'
    case 'started':
      return 'Начато'
    case 'assigned_to':
      return 'Назначено'
    case 'completed':
      return 'Выполнено'
    case 'declined':
      return 'Отменено'
  }
}

export default transformerStatus