import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { searchCharacters, searchCharacterByName } from "../api/marvelAPI"
import useDebounce from "../../hooks/useDebounce"

import { Container, Grid, Pagination } from "@mui/material"

import Card from "../../components/Card"
import Content from "../../components/Content"
import StyledTextField from "../../components/StyledTextField"

function Characters(props) {    
    const router = useRouter()
    const [page, setPage] = useState(parseInt(router.query.page) || 1)
    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0);
      }, [router]);

    const { data } = useQuery(
        ["characters", page],
        async () => fetch(`/api/characters?page=${page}`)
            .then(result => result.json()),
        {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    )
    console.log(data)
    function handlePaginationChange(e, value) {
        setPage(value)
        router.push(`characters/?page=${value}`, undefined, { shallow: true})
    }

    return (
        <Container maxWidth="lg">
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                {React.Children.toArray(
                    data?.results?.map(character =>
                        <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                            <Card character={character} key={character.id} />
                        </Grid>
                    )
                )}
            </Grid>
            <Pagination
                count={parseInt(data?.total / data?.limit)}
                variant='outlined'
                color='primary'
                className='pagination'
                page={page}
                onChange={handlePaginationChange}
            />
        </Container>
    )
}

export default Characters

export async function getServerSideProps(context) {
    let page = 1
    if (context.query.page) {
        page = parseInt(context.query.page)
    }
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(
        ["characters", page],
        async () => 
            await fetch(`/api/characters?page=${page}`)
                .then(result => result.json())
    )

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}