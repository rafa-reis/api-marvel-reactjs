import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import AppRoutes from './routes/AppRoutes'
import GlobalStyles from './config/GlobalStyles'
import ThemeDefault from './config/theme/Default'
import store from './store/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
