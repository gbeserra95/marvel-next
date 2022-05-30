import Image from "next/image"
import Link from "next/link"

import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

import { Container, useMediaQuery } from "@mui/material"
import * as S from "./styles"

function Navbar() {
    const {isOpen, setIsOpen} = useContext(MenuContext)
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))

    return (
        <S.Wrapper>
            <Container maxWidth="lg">
                <S.Navigation>
                    <Link href="/" passHref>
                        <a><Image src="/images/logo.png" width="112" height="32" priority alt="Marvel Next logo"/></a>
                    </Link>
                    {lowerThanMd ? 
                        <S.Menu 
                            onClick={() => setIsOpen(true)}
                        /> : 
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
                    }
                </S.Navigation>
            </Container>
            {isOpen &&
                <S.MobileNavigation>
                    <div>
                        <S.Close 
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
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
                </S.MobileNavigation>
            }
        </S.Wrapper>
    )
}

export default Navbar