import { Box, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import styled from "@emotion/styled"

const Icon = styled(SearchIcon)`
    color: ${props => props.theme.palette.secondary.main};
`

const CustomTextField = styled(TextField)({
    '& label': {
        color: "#fffefd"
    },
    '& input': {
        color: "#fffefd"
    },
    '& label.Mui-focused': {
      color: `${props => props.theme.palette.primary.main}`
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${props => props.theme.palette.primary.main}`
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: "#fffefd"
    },
    '& .MuiInput-underline:hover:before': {
        borderBottomColor: "#fffefd"
    }
  });


function StyledTextField({...otherProps}) {
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', margin: '16px 32px'}}>
            <Icon sx={{ mr: 1, my: 0.5 }} />
            <CustomTextField 
                id="search-input" 
                label={"Search".toUpperCase()}
                variant="standard"
                InputProps={{
                    ...otherProps
                }}
            />
        </Box>
    )
}

export default StyledTextField