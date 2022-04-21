import styled from "@emotion/styled";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    background-color: #000000;
    width: 100%;
    height: 52px;

    nav {
        display: flex;
        justify-content: space-between;
        margin: 0 32px;
        width: min(100%, 1092px);
        align-items: center;

        img {
            cursor: pointer;
        }
    
        ul {
            display: flex;
            gap: 1em;
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
    }
`