import Image from "next/image"

import * as S from "./styles"

function MiniCard({ data, width = "112px", height="160px" }) {
    return(
        <a href={`${data.urls[0].url}`} target="_blank" rel="noreferrer">
            <S.Container>
                <Image 
                    src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    alt={data.name}
                    width={width}
                    height={height}
                    title={data.title}
                />
            </S.Container>
        </a>
    )
}

export default MiniCard