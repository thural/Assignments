import { createTheme, ThemeProvider } from '@mui/material/styles'
import { deepPurple, pink } from '@mui/material/colors'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'
import Todos from './pages/Todos'

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: pink,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
})

const styles = {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '3fr 7fr',
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid sx={styles}>
                <Todos />
                <Outlet />
            </Grid>
        </ThemeProvider>
    )
}

export default App
