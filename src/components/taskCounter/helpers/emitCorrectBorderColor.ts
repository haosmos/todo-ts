import { TaskCounterStatus } from '../interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

// eslint-disable-next-line consistent-return
export const emitCorrectBorderColor = (status: TaskCounterStatus): string => {
  // eslint-disable-next-line default-case
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
  }
};
