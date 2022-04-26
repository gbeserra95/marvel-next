import { loadCharacters } from "../api/marvelAPI"

import SearchBox from "../../components/SearchBox"
import styles from "../../styles/Characters.module.css"

function Characters(props) {
    return (
        <section className={styles.container}>
            <SearchBox />
            {props.characters.map(character => <p key={character.id}>{character.id}: {character.name}</p>)}
        </section>
    )
}

export default Characters

export async function getStaticProps() {
    const characters = await loadCharacters()

    return {
        props: {
            characters
        }
    }
}