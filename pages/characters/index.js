import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { dehydrate, QueryClient, useQuery } from "react-query"
import useDebounce from "../../hooks/useDebounce"

import { Container, Grid, Pagination } from "@mui/material"

import Card from "../../components/Card"
import StyledTextField from "../../components/StyledTextField"
import theme from "../../theme"

function Characters(props) {    
    const router = useRouter()
    const [page, setPage] = useState(1)

    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0)
        setPage(parseInt(router.query.page) || 1)
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

    function handlePaginationChange(e, value) {
        setPage(value)
        router.push(`characters/?page=${value}`, undefined, { shallow: true})
    }

    return (
        <Container maxWidth="lg">
            <Grid item container xs={12}>
                <StyledTextField />
            </Grid>
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                {React.Children.toArray(
                    data?.results?.map(character =>
                        <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                            <Card character={character} key={character.id} />
                        </Grid>
                    )
                )}
                <Grid item container xs={12} justifyContent="center">
                    <Pagination
                        count={parseInt(data?.total / data?.limit)}
                        variant='outlined'
                        shape="rounded"
                        className='pagination'
                        page={page}
                        onChange={handlePaginationChange}
                        sx={{
                            ".MuiPaginationItem-previousNext": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                                borderColor: theme.palette.primary.main,
                                '&:hover': {
                                    filter: "brightness(120%)"
                                }
                            },
                            ".MuiPaginationItem-page": {
                                backgroundColor: theme.palette.bg.main,
                                color: theme.palette.secondary.main,
                                borderColor: theme.palette.primary.main,
                                transition: "0.2s",

                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main
                                }
                            },
                            ".Mui-selected": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.main
                            },
                            ".MuiPaginationItem-ellipsis": {
                                color: theme.palette.secondary.main
                            }
                        }}
                    />
                </Grid>
            </Grid>
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