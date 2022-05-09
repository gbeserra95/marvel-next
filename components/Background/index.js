import Image from "next/image"
import * as S from "./styles"

function Background({ children }) {
    return(
        <S.Wrapper maxWidth="lg">
            <S.ImageWrapper>
                <Image 
                    src="/images/homeImage.jpg"
                    alt="Background with a Spider-Man comic book picture"
                    layout="fill"
                    objectFit="cover"
                />
            </S.ImageWrapper>
            {children}
        </S.Wrapper>
    )
}

export default Background