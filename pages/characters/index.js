import { useState } from "react"
import { useQuery } from "react-query"
import { searchCharacters, searchCharacterByName } from "../api/marvelAPI"
import useDebounce from "../../hooks/useDebounce"

import { Container, Grid, Typography } from "@mui/material"

import Content from "../../components/Content"
import Card from "../../components/Card"
import StyledTextField from "../../components/StyledTextField"

function CharactersPage({ defaultData }) {
    const [searchValue, setSearchValue] = useState("")
    const debouncedSearchValue = useDebounce(searchValue, 300)

    const { isLoading, isError, isSuccess, data } = useQuery(
        ["searchCharacters", debouncedSearchValue],
        () => searchCharacterByName(debouncedSearchValue),
        {
            enabled: debouncedSearchValue.length > 0
        }
    )

    function renderSearchResult() {
        if(isLoading)
            return <Typography variant="h2" color="secondary">Loading...</Typography>
        
        if(isError)
            return <Typography variant="h2" color="secondary">This code is not working! 😣 <br/> Go see Doctor Strange so he can make a spell to fix it!</Typography>
    
        if(isSuccess) {
            if(data.count === 0)
                return <Typography variant="h2" color="secondary">Your character is probably lost in some universe. We couldn't find them. 😣 </Typography>
            
            return (
                data.results.map(character => 
                    <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                        <Card character={character} key={character.id}/>
                    </Grid>
                )
            )
        }

        return <></>
    }

    return (
        <Container maxWidth="lg">
            <StyledTextField
                type="text"
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue.toUpperCase()}
            />
                {
                    searchValue.length != 0 && 
                    <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                        {renderSearchResult()}
                    </Grid>
                }
                {
                    searchValue.length === 0 && <Content defaultData={defaultData} />
                }
           
        </Container>
    )
}

export default CharactersPage

export async function getStaticProps() {
    const defaultData = await searchCharacters(0)

    return {
        props: {defaultData}
    }
}