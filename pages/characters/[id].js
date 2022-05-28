import { useRouter } from "next/router"

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
            character={characterData.results[0]}
            comics={comicsData.results}
            events={eventsData.results}
            series={seriesData.results}
        />
    )
}

export default Character

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/characters/')
    const data = await res.json()

    const paths = data.results.map((character) => ({
        params: { id: character.id.toString()}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const characterData = await fetch(`http://localhost:3000/api/character/${params.id}`)
                                .then(result => result.json())
    
    const comicsData = await fetch(`http://localhost:3000/api/comics/${params.id}`)
                                .then(result => result.json())
    
    const eventsData = await fetch(`http://localhost:3000/api/events/${params.id}`)
                                .then(result => result.json())

    const seriesData = await fetch(`http://localhost:3000/api/series/${params.id}`)
                                .then(result => result.json())
    
    return {
        props: {
            characterData,
            comicsData,
            eventsData,
            seriesData
        },
        revalidate: 90,
    }
}