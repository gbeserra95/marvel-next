import { useRouter } from "next/router"
import { fetchCharacters, fetchCharacterById, fetchComicsById, fetchEventsById, fetchSeriesById } from "../../helpers/clientSideAPIs"

import CharacterContent from "../../components/CharacterContent"

import {Grid, Typography } from "@mui/material"

function Character({ characterData, comicsData, eventsData, seriesData }) {
    const router = useRouter()

    if(router.isFallback) {
        return(
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                <Typography variant="h2" color="secondary">Loading...</Typography>
            </Grid>
        )
    }
    
    return (
        <CharacterContent 
            character={characterData.data.results[0]}
            comics={comicsData.data.results}
            events={eventsData.data.results}
            series={seriesData.data.results}
        />
    )
}

export default Character

export async function getStaticPaths() {
    const data = await fetchCharacters()

    const paths = data.data.results.map((character) => ({
        params: { id: character.id.toString()}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const characterData = await fetchCharacterById(params.id)
    
    if (characterData.code !== 200)
        return { notFound: true }

    const comicsData = await fetchComicsById(params.id)
    
    const eventsData = await fetchEventsById(params.id)

    const seriesData = await fetchSeriesById(params.id)
    
    return {
        props: {
            characterData,
            comicsData,
            eventsData,
            seriesData
        },
        revalidate: 90
    }
}