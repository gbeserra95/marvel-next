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
                main: '#ffffff',
            },
            text: {
                main: '#000000',
            }
        },
        typography: {
            h1: {
                fontSize: "36px",
                fontWeight: "bold",
                lineHeight: "54px",
                [theme.breakpoints.down('md')]: {
                    fontSize: "24px",
                    lineHeight: "36px",
                }
            },
            h2: {
                fontSize: "24px",
                lineHeight: "36px",
                fontWeight: "bold",
                [theme.breakpoints.down('md')]: {
                    fontSize: "18px",
                    lineHeight: "27px",
                }
            },
            p: {
                fontSize: "14px",
                lineHeight: "21px",
            }
        }
    }
)

export default theme;