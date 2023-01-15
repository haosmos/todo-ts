import { TaskCounterStatus } from '../interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (status: TaskCounterStatus): string => {
  switch (status) {
    case Status.todo:
      return 'Todos';
    case Status.inProgress:
      return 'In progress';
    case Status.completed:
      return 'Completed';
  }
};
