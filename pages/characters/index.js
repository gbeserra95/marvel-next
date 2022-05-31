import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { dehydrate, QueryClient, useQuery } from "react-query"

import { Container, Grid } from "@mui/material"

import StyledTextField from "../../components/StyledTextField"
import SearchResult from "../../components/SearchResult"
import Content from "../../components/Content"

import { MenuContext } from "../../context/MenuContext"

function Characters(props) {   
    const { setIsOpen } = useContext(MenuContext)

    useEffect(() => {
      setIsOpen(false)
    }, [setIsOpen])

    // React Query search setup 
    const [searchValue, setSearchValue] = useState("")

    // React SSR Pagination setup
    const router = useRouter()
    const [page, setPage] = useState(1)

    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0)
        setPage(parseInt(router.query.page) || 1)
      }, [router]);

    const data = useQuery(
        ["characters", page],
        async () => {
            const response = await axios.get(`/api/characters?page=${page}`)
            return response
        },
        {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false
        }
    )

    function handlePaginationChange(e, value) {
        setPage(value)
        router.push(`characters/?page=${value}`, undefined, { shallow: true})
    }

    return (
        <Container maxWidth="lg">
            <Grid item container xs={12} paddingY={4} justifyContent={{xs: "center", sm: "center", md: "flex-start"}}>
                <StyledTextField 
                    type="text"
                    onChange={(event) => setSearchValue(event.target.value)}
                    value={searchValue.toUpperCase()}
                />
            </Grid>
            {
                searchValue.length != 0 && 
                <Grid container minHeight="calc(100vh - 288px)" alignItems="center" justifyContent={{xs: "center", sm: "center", md: "flex-start"}}>
                    <SearchResult 
                        searchValue={searchValue}
                    />
                </Grid>
            }
            {
                searchValue.length === 0 && 
                    <Content
                        data={data}
                        page={page}
                        onChange={handlePaginationChange}
                    />
            }

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
        async () => {
            const response = await axios.get(`/api/characters?page=${page}`)
            return response
        }
    )

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}