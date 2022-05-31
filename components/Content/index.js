import React from "react"

import { Grid, Pagination, Typography, useMediaQuery } from "@mui/material"
import Card from "../Card"

import theme from "../../theme"

function Content({ data, page, onChange }) {
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))
    if(data?.isSuccess) {
        console.log(data)
        return (
            <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4}>
                {data.data.data.data.results.map(character =>
                    <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                        <Card character={character} key={character.id} />
                    </Grid>
                )}
                <Grid item container xs={12} justifyContent="center">
                    <Pagination
                        count={parseInt(data.data.data.data.total / data.data.data.data.limit) || 1}
                        variant='outlined'
                        shape="rounded"
                        className='pagination'
                        page={page}
                        onChange={onChange}
                        size={lowerThanMd ? "small" : "medium"}
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
                            ".MuiPaginationItem-page.Mui-selected": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.secondary.main,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main
                                }
                            },
                            ".MuiPaginationItem-ellipsis": {
                                color: theme.palette.secondary.main
                            }
                        }}
                    />
                </Grid>
            </Grid>
        )
    }

    if(data?.isLoading) {
        return (
            <Grid container minHeight="calc(100vh - 288px)">
                <Grid item container xs={12} alignItems="center" justifyContent="center">
                    <Typography 
                        variant="h2" 
                        color="secondary"
                        textAlign="center"
                    >
                        Loading...
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    if(data?.isError) {
        return (
            <Grid container minHeight="calc(100vh - 288px)">
                <Grid item container xs={12} alignItems="center" justifyContent="center">
                    <Typography 
                        variant="h2" 
                        color="secondary"
                        textAlign="center"
                    >
                        Sorry! 😣 <br/>
                        {data.error.response.data.message}
                    </Typography>
                </Grid>
            </Grid>
        )
    }

    return <></>
}

export default Content