import styled from "@emotion/styled";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const ImageWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 450px;
`

export const Anchor = styled.a`
    display: flex;
    justify-content: ${props => props.reverse ? "flex-start" : "flex-end"};
    width: 100%;
    font-weight: 400;
    cursor: pointer;
    color: ${props => props.theme.palette.secondary.main};
    transition: 0.2s;

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }  
`

export const MainEvent = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    cursor: pointer;
`

export const ArrowLink = styled(ArrowCircleRightIcon)`
    font-size: 24px;
`