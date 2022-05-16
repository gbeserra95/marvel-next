import { useState } from "react"
import { limit, searchCharacters } from "../../pages/api/marvelAPI"

import { Grid, Typography } from "@mui/material"
import InfiniteScroll from "react-infinite-scroll-component"

import Card from "../Card"

function Content({ defaultData }) {
    const [characters, setCharacters] = useState(defaultData.results)
    const [hasMore, setHasMore] = useState(true)
    const [offset, setOffset] = useState(limit) // 24 is how many characters I am fetching for call

    async function getMoreCharacters() {
        const data = await searchCharacters(offset)
        setCharacters([...characters, ...data.results])
        setOffset(offset + limit)

        if(data.count < limit)
            setHasMore(false)
    }
    
    return (
        <InfiniteScroll
            dataLength={characters.length}
            next={getMoreCharacters}
            hasMore={hasMore}
            loader={<Typography variant="h2" color="secondary">Loading...</Typography>}
        >    
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                {characters.map(character => 
                    <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                        <Card character={character} key={character.id} />
                    </Grid>
                )}
            </Grid>
        </InfiniteScroll>
    )
}

export default Content

/*
                    <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                        <Card character={character} key={character.id} />
                    </Grid>
*/