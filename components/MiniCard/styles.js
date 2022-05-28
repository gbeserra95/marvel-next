import styled from "@emotion/styled";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 176px;
    width: 112px;
    transition: .2s;
    padding: 0;

    &:hover {
        cursor: pointer;
        padding-bottom: 16px;
    }
`