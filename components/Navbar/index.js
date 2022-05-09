import Image from "next/image"
import Link from "next/link"

import { Container } from "@mui/material"
import * as S from "./styles"

function Navbar() {
    return (
        <S.Wrapper>
            <Container maxWidth="lg">
                <S.Navigation>
                    <Link href="/">
                        <Image src="/images/logo.png" width="112" height="32" />
                    </Link>
                    <ul>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/characters">
                            <li>Characters</li>
                        </Link>
                        <Link href="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                </S.Navigation>
            </Container>
        </S.Wrapper>
    )
}

export default Navbar