import { useRouter } from "next/router"

import {Grid, Typography } from "@mui/material"

function Character({ data }) {
    const router = useRouter()

    if(router.isFallback) {
        return(
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                <Typography variant="h2" color="secondary">Loading...</Typography>
            </Grid>
        )
    }
    
    return <Typography variant="h2" color="secondary">{JSON.stringify(data.results)}</Typography>  
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
    const res = await fetch(`http://localhost:3000/api/character/${params.id}`)
    const data = await res.json()

    return {
        props: {
            data
        },
        revalidate: 90,
    }
}
