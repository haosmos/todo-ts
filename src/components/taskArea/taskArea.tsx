import { useQuery, useMutation } from '@tanstack/react-query';
import { Box, Grid, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import Task from '../task/task';
import TaskCounter from '../taskCounter/taskCounter';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './Interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/Status';
import { IUpdateTask } from '../createTaskForm/interfaces/IUpdateTask';
import React, { useCallback } from 'react';

function TaskArea(): JSX.Element {
  const { error, isLoading, data, refetch } = useQuery(
    ['tasks'],
    () => {
      return sendApiRequest<ITaskApi[]>(
        'http://localhost:3001/tasks',
        'GET'
      );
    }
  );
  
  const updateTaskMutation = useMutation(
    (data: IUpdateTask) => sendApiRequest(
      'http://localhost:3001/tasks',
      'PUT',
      data
    )
  );
  
  const onStatusChangeHandler = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }, [updateTaskMutation]);
  
  function markCompleteHandler(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }
  
  // const markCompleteHandler = useCallback((
  //   e:
  //     | React.MouseEvent<HTMLButtonElement>
  //     | React.MouseEvent<HTMLAnchorElement>,
  //   id: string,
  // ) => {
  //   updateTaskMutation.mutate({
  //     id,
  //     status: Status.completed,
  //   });
  // }, [updateTaskMutation]);
  
  return (
    <Grid
      item
      md={8}
      px={4}
    >
      <Box mb={8} px={4}>
        <h2>
          Status of Your Tasks As On
          {' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          md={8}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <>
            {error && (
              <Alert
                severity="error"
                sx={{
                  width: '100%',
                  marginBottom: '16px'
                }}
              >
                There was an error fetching your tasks
              </Alert>
            )}
            
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert
                severity="warning"
                sx={{
                  width: '100%',
                  marginBottom: '16px'
                }}
              >
                You do not have any tasks created yet. Start by creating a task
              </Alert>
            )}
            
            {isLoading ? <LinearProgress /> : (
              Array.isArray(data)
              && data.length > 0
              && data.map((each, index) => {
                return each.status === Status.todo || each.status === Status.inProgress
                       ? (
                         <Task
                           key={index + each.priority}
                           id={each.id}
                           title={each.title}
                           description={each.description}
                           date={new Date(each.date)}
                           status={each.status}
                           priority={each.priority}
                           onStatusChange={onStatusChangeHandler}
                           onClick={markCompleteHandler}
                         />
                       ) : false;
              })
            )}
          </>
        </Grid>
      </Grid>
    
    </Grid>
  );
}

export default TaskArea;
