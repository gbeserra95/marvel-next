import * as S from "./styles"

function StyledButton({children, ...otherProps}) {
    return (
        <S.NewButton {...otherProps}>
            {children}
        </S.NewButton>
    )
}

export default StyledButton