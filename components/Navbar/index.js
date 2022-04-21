import Image from "next/image"
import * as S from "./styles"

function Navbar() {
    return (
        <S.Container>
            <nav>
                <Image src="/images/logo.png" width="112" height="32" />
                <ul>
                    <li>Home</li>
                    <li>Characters</li>
                    <li>About</li>
                </ul>
            </nav>
        </S.Container>
    )
}

export default Navbar