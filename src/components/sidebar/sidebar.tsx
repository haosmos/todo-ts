import { Grid } from '@mui/material';
import Profile from '../profile/profile';
import CreateTaskForm from '../createTaskForm/createTaskForm';

function Sidebar(): JSX.Element {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Chaosmos" />
      <CreateTaskForm />
    </Grid>
  );
}

export default Sidebar;
