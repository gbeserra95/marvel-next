import Link from "next/link"
import Image from "next/image"
import * as S from "./styles"

function Card({ character }) {
    return(
        <Link href={`/characters/${character.id}`} key={character.id}>
            <S.Container>
                <Image 
                    src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
                    alt={character.name}
                    width="176"
                    height="240"
                />
                <p>{character.id}</p>
                <p>{character.name}</p>
            </S.Container>
        </Link>
    )
}

export default Card