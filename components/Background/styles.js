import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)`
    height: calc(100vh - 144px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImageWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    margin: 0;
    width: 100vw;
    height: calc(100vh - 144px);

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 70%);
    }
`