import { Switch, Box, FormControlLabel, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

function TaskFooter({
  onStatusChange = (e) => console.log(e),
  onClick = (e) => console.log(e)
}: ITaskFooter): JSX.Element {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={(e) => onStatusChange(e)}
          />
        }
        label="In Progress"
      />
      
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          color: '#ffffff'
        }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    
    </Box>
  );
}

export default TaskFooter;

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func
};
