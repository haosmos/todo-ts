import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/dashboard';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
