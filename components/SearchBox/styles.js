import styled from "@emotion/styled"
import { MdSearch } from "react-icons/md"

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 364px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid ${props => props.color ? "orange" : "black"};
    color: ${props => props.color ? "orange" : "black"};

    input {
        width: 100%;
        height: 48px;
        font-size: 20px;
        padding: 0.25rem 0.5rem;
        border: none;
        background-color: transparent;

        &::placeholder {
            color: darkgrey;
        }
        &:focus {
            outline: none;
        }
    }
`

export const SearchIcon = styled(MdSearch)`
    font-size: 24px;
`