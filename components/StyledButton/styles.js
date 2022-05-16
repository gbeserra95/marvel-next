import styled from "@emotion/styled"
import { Button } from "@mui/material"

export const NewButton = styled(Button)`
    text-transform: none;
    color: ${props => props.theme.palette.secondary.main};
    background-color: ${props => props.theme.palette.primary.main};
    margin: 2rem;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme.palette.primary.main};
        filter: brightness(80%);
    }
`
