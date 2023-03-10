import { useCallback, useState } from 'react';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

export function filterTasksHandler(task: TaskCounterStatusType) {
  switch (task) {
    case 'todo':
      console.log('it is all todo tasks!');
      break;
    case 'completed':
      console.log('it is all completed tasks!');
      break;
    case 'all':
      console.log('it is all tasks!');
      break;
    case 'inProgress':
      console.log('it is all in progress tasks!');
      break;
    default:
      console.log('it is not all tasks!');
  }
  console.log(task);
  changeFilterHandler(currentTaskType);
}
