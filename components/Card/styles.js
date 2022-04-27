import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
    height: 360px;
    width: 176px;
    background: #151515;
    color: white;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
    transition: background .2s;

    img {
        transition: .2s;
    }

    p {
        font-size: 20px;
        margin: 8px 8px 16px 8px;
    }

    p + p {
        font-size: 12px;      
    }

    &:hover {
        cursor: pointer;
        background: #ec1d24;

        img {
            transform: scale(1.2);
        }
    }
`