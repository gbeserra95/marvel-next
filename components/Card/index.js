import Image from "next/image"
import * as S from "./styles"

function Card({character}) {
    return(
        <S.Container>
            <Image 
                src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
                alt="Spider-man"
                width="176"
                height="240"
            />
            <p>{character.id}</p>
            <p>{character.name}</p>
        </S.Container>
    )
}

export default Card