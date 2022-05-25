import Image from "next/image"
import Link from "next/link"

import { Container } from "@mui/material"
import * as S from "./styles"

function Navbar() {
    return (
        <S.Wrapper>
            <Container maxWidth="lg">
                <S.Navigation>
                    <Link href="/" passHref>
                        <a><Image src="/images/logo.png" width="112" height="32" /></a>
                    </Link>
                    <ul>
                        <Link href="/" passHref>
                            <a><li>Home</li></a>
                        </Link>
                        <Link href="/characters" passHref>
                            <a><li>Characters</li></a>
                        </Link>
                        <Link href="/about" passHref>
                            <a><li>About</li></a>
                        </Link>
                    </ul>
                </S.Navigation>
            </Container>
        </S.Wrapper>
    )
}

export default Navbar