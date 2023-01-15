import { Status } from '../../createTaskForm/enums/Status';

export type TaskCounterStatus = Status.todo | Status.inProgress | Status.completed;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatus;
}
