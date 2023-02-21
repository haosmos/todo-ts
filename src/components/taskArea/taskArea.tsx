import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import Task from '../task/task';
import TaskCounter from '../taskCounter/taskCounter';

function TaskArea(): JSX.Element {
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
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default TaskArea;
