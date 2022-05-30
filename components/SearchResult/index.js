import axios from "axios"

import useDebounce from "../../hooks/useDebounce"
import { useQuery } from "react-query"

import Card from "../Card"

import { Grid, Typography } from "@mui/material"

function SearchResult({ searchValue }) {
    const debouncedSearchValue = useDebounce(searchValue, 300)

    const { isLoading, isError, isSuccess, data, error } = useQuery(
        ["searchCharacters", debouncedSearchValue],
        async () => {
            const response = await axios.get(`/api/characters/${debouncedSearchValue}`)
            return response.json()
        },
        {
            enabled: debouncedSearchValue.length > 0
        }
    )

    if(isLoading) {
        return <Typography variant="h2" color="secondary" textAlign="center">Loading...</Typography>
    }

    if(isError){
        console.log(data)
        return <Typography variant="h2" color="secondary" textAlign="center">Sorry! 😣 <br/>{error.response.data.message}</Typography>
    }

    if(isSuccess) {
        if(data?.count === 0) {
            return <Typography variant="h2" color="secondary" textAlign="center">Your character is probably lost in some universe. We couldn&apos;t find them. 😣 </Typography>
        }
        
        return (
            data?.results?.map(character => 
                <Grid item container xs={12} sm={4} md={3} lg={2} padding={4} justifyContent="center" key={"searched-character-grid-item-" + character.id}>
                    <Card character={character} key={"searched-character-" + character.id}/>
                </Grid>
            )
        )
    }

    return <></>
}

export default SearchResult