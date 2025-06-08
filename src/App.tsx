import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { makeStore } from './store'
import { Users } from './features/users/Users'
import { appTheme } from './assets'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Provider store={makeStore()}>
        <Users />
      </Provider>
    </ThemeProvider>
  );
}

export default App
