import React from "react"

import useDebounce from "../../hooks/useDebounce"
import { useQuery } from "react-query"

import Card from "../Card"

import { Grid, Typography } from "@mui/material"

function SearchResult({ searchValue }) {
    const debouncedSearchValue = useDebounce(searchValue, 300)

    const { isLoading, isError, isSuccess, data } = useQuery(
        ["searchCharacters", debouncedSearchValue],
        async () => fetch(`/api/characters/${debouncedSearchValue}`)
            .then(result => result.json()),
        {
            enabled: debouncedSearchValue.length > 0
        }
    )

    if(isLoading) {
        return <Typography variant="h2" color="secondary">Loading...</Typography>
    }

    if(isError){
        return <Typography variant="h2" color="secondary">This code is not working! 😣 <br/> Go see Doctor Strange so he can make a spell to fix it!</Typography>
    }

    if(isSuccess) {
        if(data?.count === 0) {
            return <Typography variant="h2" color="secondary">Your character is probably lost in some universe. We couldn't find them. 😣 </Typography>
        }
        
        return (
            React.Children.toArray(
                data?.results?.map(character => 
                    <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center">
                        <Card character={character} key={character.id}/>
                    </Grid>
                )
            )
        )
    }

    return <></>
}

export default SearchResult