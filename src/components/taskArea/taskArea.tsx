import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';

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
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <Box>Tasks Will Come Over Here</Box>
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
      </Grid>
    
    </Grid>
  );
}

export default TaskArea;