import Link from "next/link"

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Container, Typography } from '@mui/material'
import * as S from "./styles"

function Footer() {
    return (
        <S.Footer>
            <Container maxWidth="lg">
                <S.Wrapper>
                    <Typography variant="p" color="secondary">&copy; 2022 - Designed and built by Gabriel Beserra</Typography>
                    <div>
                        <Link href="https://www.linkedin.com/in/-gabrielbeserra/" passHref>
                            <S.Icon target="_blank"><LinkedInIcon /></S.Icon>
                        </Link>
                        <Link href="https://github.com/gbeserra95" passHref>
                            <S.Icon target="_blank"><GitHubIcon /></S.Icon>
                        </Link>
                    </div>
                </S.Wrapper>
            </Container>
        </S.Footer>
    )
}
export default Footer