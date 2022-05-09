import styled from "@emotion/styled";

export const Wrapper = styled.header`
    margin: 0 auto;
    background-color: ${props => props.theme.palette.text.main};
    width: 100vw;
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