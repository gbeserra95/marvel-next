import styled from "@emotion/styled"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export const Wrapper = styled.header`
    margin: 0 auto;
    background-color: ${props => props.theme.palette.text.main};
    width: 100%;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    align-items: center;

    img {
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
        list-style: none;
        color: white;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        transition: .2s;
    }

    li:hover {
        color: lightgrey;
    }
`

export const MobileNavigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.palette.bg.main};
    z-index: 2;

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 0 16px;
    }

    ul {
        display: flex;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        color: white;
        padding: 0;
        margin: 0;

        li {
            text-align: center;
            cursor: pointer;
            transition: .2s;
            font-size: 36px;
        }
    
        li:hover {
            color: lightgrey;
        }
    }

`

export const Menu = styled(MenuIcon)`
    font-size: 36px;
    color: white;
    cursor: pointer;
    transition: .2s;

    li:hover {
        color: lightgrey;
    }
`

export const Close = styled(CloseIcon)`
    font-size: 36px;
    color: white;
    cursor: pointer;
    transition: .2s;

    li:hover {
        color: lightgrey;
    }
`