import { createTheme } from '@mui/material/styles';
import { lineHeight } from '@mui/system';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1420,
            xl: 1640,
        },
    }
})

theme = createTheme(theme, 
    {
        palette: {
            primary: {
                main: '#ec1d24'
            },
            secondary: {
                main: '#fffefd'
            },
            text: {
                main: '#000000'
            },
            bg: {
                main: '#202020'
            }
        },
        typography: {
            h1: {
                fontSize: "36px",
                fontWeight: "bold",
                margin: "0 auto",
                [theme.breakpoints.down('md')]: {
                    fontSize: "24px",
                }
            },
            h2: {
                fontSize: "20px",
                fontWeight: "bold",
                margin: "0 auto",
                [theme.breakpoints.down('md')]: {
                    fontSize: "18px",
                }
            },
            p: {
                fontSize: "18px",
                margin: "0 auto",
                [theme.breakpoints.down('md')]: {
                    fontSize: "16px",
                }
            }
        }
    }
)

export default theme;