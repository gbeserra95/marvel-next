import { Pagination } from "@mui/material"
import { charactersData } from "../api/marvelAPI"

import SearchBox from "../../components/SearchBox"
import Card from "../../components/Card"
import styles from "../../styles/Characters.module.css"

function Characters({data}) {
    const offset = 20

    return (
        <section className={styles.container}>
            <SearchBox />
            <div className={styles.gallery}>
                {data.results.map(character => <Card character={character} />)}
            </div>
            <div className={styles.pagination}>
                <Pagination 
                    count={parseInt(data.total/offset)}
                />
            </div>
        </section>
    )
}

export default Characters

export async function getStaticProps() {
    const data = await charactersData()

    return {
        props: {
            data
        }
    }
}