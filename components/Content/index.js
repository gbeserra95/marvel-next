import React from "react"

import { Grid, Pagination, Typography } from "@mui/material"
import Card from "../Card"

import theme from "../../theme"

function Content({ data, page, onChange }) {
    return (
        <>
            {data ? 
                <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4}>
                    {React.Children.toArray(
                        data?.results?.map(character =>
                            <Grid item container xs={12} sm={4} md={3} lg={2} justifyContent="center" key={'grid-item' + character.id}>
                                <Card character={character} key={character.id} />
                            </Grid>
                        )
                    )}
                    <Grid item container xs={12} justifyContent="center">
                        <Pagination
                            count={parseInt(data?.total / data?.limit) || 1}
                            variant='outlined'
                            shape="rounded"
                            className='pagination'
                            page={page}
                            onChange={onChange}
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
                :
                <Grid container minHeight="calc(100vh - 192px)" padding={4} spacing={4} alignItems="center">
                    <Typography 
                        variant="h2" 
                        color="secondary"
                    >
                        Loading...
                    </Typography>
                </Grid>
            }
        
        </>
    )
}

export default Content