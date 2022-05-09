import styled from "@emotion/styled"

export const Footer = styled.footer`
    margin: 0 auto;
    width: 100vw;
    background-color: black;
    color: white;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;

    div {
        display: flex;
        gap: 2rem;
    }
`

export const Icon = styled.a`
    width: 24px;
    height: 24px;
    transition: 0.2s;

    &:hover {
        color: lightgrey;
        cursor: pointer;
    }
`